import React, { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './TasksContainer.scss';
import TaskListType from '../../types/taskList';
import SocketClient from '../../utils/socketIO';

const TasksContainer = () => {
    const [tasks, setTasks] = useState<TaskListType>();

    SocketClient.on('updatedTasks', ({ updatedTasks }) => {
        setTasks(updatedTasks);
    });

    useEffect(() => {
        fetch('http://localhost:4000/api').then((response) => {
            response.json().then((data) => {
                setTasks(data);
            });
        });
    }, []);
    const onDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) return;
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }
        SocketClient.emit('taskDragged', {
            source,
            destination,
        });
    };

    if (!tasks) {
        return (
            <div className="tasks-container">
                <p>Tasks Container</p>
            </div>
        );
    }

    return (
        <div className="tasks-container">
            <p>Tasks Container</p>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="single-task-container">
                    {Object.keys(tasks).map((key) => (
                        <TaskList
                            key={key}
                            title={key}
                            data={tasks[key]}
                        ></TaskList>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
};
export default TasksContainer;
