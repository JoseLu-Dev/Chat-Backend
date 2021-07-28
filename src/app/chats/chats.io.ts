import { Server as IoServer, Socket } from "socket.io";
import { SocketsEvents } from "../helpers/enums.helpers";
import Message from "./message.model";

export default function chatSockets(io: IoServer, socket: Socket) {
    socket.on(SocketsEvents.message, (message: Message) => {
        io.emit(SocketsEvents.message, message)
    })
}