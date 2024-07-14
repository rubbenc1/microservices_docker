import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() user: {username: string; password: string}){
    return this.appService.createUser(user);
  }
  @Get(':id')
  async getStatus(@Param('id') id: string) {
    return this.appService.getUser(id);
  }
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: {username: string; password: string}){
    return this.appService.updateUser(id, user)
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string){
    return this.appService.deleteUser(id)
  }
}
