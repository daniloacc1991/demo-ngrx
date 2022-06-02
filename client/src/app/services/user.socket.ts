import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";

@Injectable()
export class UserSocket extends Socket {
  constructor() {
    super({
      url: 'http://localhost:3001/users',
      options: {},
    });
  }
}
