import { Server as IoServer, Socket } from "socket.io";
import chatSockets from "./chats/chats.io";
import { SocketsEvents } from "./helpers/enums.helpers";

/**
 * Sets all events that will handle the socket server
 * 
 * @param io Socket.io server
 */
export default function initializeSockets(io: IoServer) {
    io.on(SocketsEvents.connection, (socket: Socket) => {
        chatSockets(io, socket)
    });
}