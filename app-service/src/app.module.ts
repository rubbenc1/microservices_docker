import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'AUTHORIZATION',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'auth-queue',
        queueOptions: {
          durable: false
        },
      },
    }])
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
