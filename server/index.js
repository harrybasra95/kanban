import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { repaceTask, tasks } from './tasks.js';

const app = express();
const PORT = 4000;
const server = http.Server(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('taskDragged', (data) => {
        const updatedTasks = repaceTask(data);
        socket.emit('updatedTasks', {
            updatedTasks,
        });
    });

    socket.on('disconnect', () => {
        socket.disconnect();
        console.log('🔥: A user disconnected');
    });
});

app.get('/api', (req, res) => {
    res.json(tasks);
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
