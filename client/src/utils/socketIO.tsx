import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../types/socketIo';

// please note that the types are reversed
const SocketClient: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'http://localhost:4000'
);

export default SocketClient;
