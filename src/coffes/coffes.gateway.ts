import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';


@WebSocketGateway(81, { transports: ['websocket'] })
export class CoffesGateway implements OnGatewayInit {
  @WebSocketServer()
  private server: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('send_message')
  listenForMessages(@MessageBody() data: string) {
    this.server.sockets.emit('receive_message', data);
  }
}
