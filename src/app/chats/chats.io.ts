import { Server as IoServer, Socket } from "socket.io";
import { SocketsEvents } from "../helpers/enums.helpers";
import { Message, Sender } from "./message.model";

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

    // sends back to all users when a user is typing
    socket.on(SocketsEvents.writing, (sender: Sender, isTyping: boolean) => {
        io.emit(SocketsEvents.writing, sender, isTyping);
    })
}

const usersID = [0]

/**
 * @returns a new user ID
 */
function getNewUserId() {
    usersID.push(usersID[usersID.length - 1] + 1);
    return usersID[usersID.length - 1];
}