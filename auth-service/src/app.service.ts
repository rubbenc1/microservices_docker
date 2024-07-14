import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: {[key: string]: {username: string; password: string}} = {};
  private currentId = 0;

  createUser(user: {username: string; password: string}){
    const id = ++this.currentId
    this.users[id] = user;
    return {id, ...user}
  }
  getUser(id: number){
    return this.users[id] || null;
  }
  updateUser(id: number, user:{username: string; password: string}){
    if(!this.users[id]){
      return null;
    }
    this.users[id] = user;
    return {id,...user}
  }
  deleteUser(id: number){
    const user = this.users[id];
    delete this.users[id];
    return user;
  }
}
