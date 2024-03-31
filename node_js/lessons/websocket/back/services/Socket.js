import { Server as SocketServer } from "socket.io";
import { ALLOW_CORS } from "../middlewares/cors.js";

class Socket {

  static init(server) {
    this.socket = new SocketServer(server, {
      cors: ALLOW_CORS
    });
    this.socket.on('connect', this.#handleConnect);
  }

  static #handleSendMessage = (client) => (data) => {
    //userId client
    const { friendId } = data;
    const sendData = {
      id: Date.now(),
      text: data.text,
      userId: friendId,
      friendId: client.userId,
      createdAt: new Date()
    }
    this.socket.to(`user_${friendId}`).emit('new-message', sendData);
    client.emit('new-message', sendData);
  }
  static #handleDisconnect = (client) => (data) => {
    //userId client
    console.log('disconnect', { userId: client.userId })
  }

  static emit(to, event, data = {}) {
    this.socket.to(to).emit(event, data)
  }

  static #handleConnect = (client) => {
    const { authorization } = client.handshake.headers;
    client.userId = userId;
    const userId = authorization;
    client.join(`user_${userId}`);

    client.on('send-message', this.#handleSendMessage(client));
    client.on('disconnect', this.#handleDisconnect(client))
  }
}

export default Socket
