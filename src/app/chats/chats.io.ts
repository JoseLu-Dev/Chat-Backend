import { Server as IoServer, Socket } from "socket.io";
import { SocketsEvents } from "../helpers/enums.helpers";
import { Message } from "./message.model";

/**
 * Sets all chat events to the socket connected and the server
 * 
 * @param io Socket.io server
 * @param socket connected socket
 */
export default function chatSockets(io: IoServer, socket: Socket) {
    // sends a userID to identify each user on the frontend app
    socket.emit(SocketsEvents.identification, getNewUserId());

    // sends a message back to all sockets when one is received
    socket.on(SocketsEvents.message, (message: Message) => {
        io.emit(SocketsEvents.message, message);
    })
}

const usersID = [0]

/**
 * @returns a new user ID
 */
function getNewUserId() {
    usersID.push(usersID[usersID.length-1] + 1);
    return usersID[usersID.length-1];
}