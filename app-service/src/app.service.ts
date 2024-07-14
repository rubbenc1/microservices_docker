import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('AUTHORIZATION') private client: ClientProxy){}

  async createUser(user: {username: string; password: string}){
    return this.client.send({cmd:'create-user'}, user)
  }
  async getUser(id:string){
    return this.client.send({cmd: 'get-user'}, id)
  }
  async updateUser(id: string, user: {username: string; password: string}){
    return this.client.send({cmd: 'update-user'}, {id, user});
  }
  async deleteUser(id: string){
    return this.client.send({cmd: 'delete-user'}, {id})
  }
}
