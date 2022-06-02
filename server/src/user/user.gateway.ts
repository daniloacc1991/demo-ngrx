import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { UserAction } from './actions/user.action';
import { Routes } from '../common/enums/routes.enum';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
  },
  namespace: `${Routes.USER}`,
})
export class UserGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  @WebSocketServer()
  private socket$: Server;

  afterInit() {
    Logger.log(`socket ${UserGateway.name} initialized`);
  }

  handleConnection(client) {
    Logger.log(`client ${UserGateway.name} connected`);
  }

  handleDisconnect(client) {
    Logger.log(`client ${UserGateway.name} disconnected`);
  }

  createLive(item: any) {
    this.socket$.emit(UserAction.LiveCreate, item);
  }

  updateLive(item: any) {
    this.socket$.emit(UserAction.LiveUpdate, item);
  }

  deleteLive(id: any) {
    this.socket$.emit(UserAction.LiveDelete, id);
  }
}
