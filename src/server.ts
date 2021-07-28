import express from 'express';
import http from 'http'
import { Server as IoServer } from "socket.io";
import initializeSockets from './app/sockets'

const app: express.Application = express();

// Start server on port from environment variables or default port
const port = process.env.PORT || 3000
const server: http.Server = app.listen(port, () => {
    console.log(`Server Started on port ${server.address().port}`)
    onServerStart()
})

//Creates Socket.io server
const io: IoServer = new IoServer(
    server,
    {
        cors: {
            origin: '*'
        }
    });

function onServerStart() {
    initializeSockets(io)
}

export { io, app, server }
