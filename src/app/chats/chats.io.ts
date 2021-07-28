import { Server as IoServer, Socket } from "socket.io";
import { SocketsEvents } from "../helpers/enums.helpers";
import { Message } from "./message.model";

export default function chatSockets(io: IoServer, socket: Socket) {
    socket.emit(SocketsEvents.identification, getId());
    socket.on(SocketsEvents.message, (message: Message) => {
        io.emit(SocketsEvents.message, message)
    })
}

const usersID = [0]

function getId() {
    usersID.push(usersID[usersID.length-1] + 1);
    return usersID[usersID.length-1];
}