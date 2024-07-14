import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'create-user'})
  createUser(user: {username: string; password: string}){
    return this.appService.createUser(user)
  }
  @MessagePattern({cmd: 'get-user'})
  getUser(id: number){
    return this.appService.getUser(id);
  }
  @MessagePattern({cmd: 'update-user'})
  updateUser(data: {id: number;user: {username: string; password: string}}){
    return this.appService.updateUser(data.id, data.user);
  }
  @MessagePattern({cmd: 'delete-user'})
  deleteUser(id: number){
    return this.appService.deleteUser(id);
  }
}
