import {Server as SocketServer} from "socket.io";
import {ALLOW_CORS} from "../middlewares/cors.js";

class Socket {

    static init(server) {
        this.socket = new SocketServer(server, {
            cors: ALLOW_CORS
        });

        this.socket.on('connect', this.#handleConnect);
    }

    static #handleConnect = (client) => {
        client.on('click-button', this.#handleButtonClick(client));
    }

    static #handleButtonClick = (client) => (data) => {
        this.socket.emit('open-block', data);
    }
}

export default Socket
