import React from 'react';
import AddTask from './AddTask';
import TasksContainer from './TasksContainer';
import Nav from './Nav';
import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../types/socketIo';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'http://localhost:4000'
);
const Task = () => {
    return (
        <div>
            <Nav />
            <AddTask socket={socket} />
            <TasksContainer socket={socket} />
        </div>
    );
};
export default Task;
