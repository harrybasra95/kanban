import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

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

const fetchID = () => Math.random().toString(36).substring(2, 10);
const tasks = {
    pending: {
        title: 'pending',
        items: [
            {
                id: fetchID(),
                title: 'Send the Figma file to Dima',
                comments: [],
            },
        ],
    },
    ongoing: {
        title: 'ongoing',
        items: [
            {
                id: fetchID(),
                title: 'Review GitHub issues',
                comments: [
                    {
                        name: 'David',
                        text: 'Ensure you review before merging',
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
    completed: {
        title: 'completed',
        items: [
            {
                id: fetchID(),
                title: 'Create technical contents',
                comments: [
                    {
                        name: 'Dima',
                        text: 'Make sure you check the requirements',
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
};
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('taskDragged', (data) => {
        console.log(data);
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
