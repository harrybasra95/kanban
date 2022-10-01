import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskType from '../../types/task';
import './Task.scss';
interface TaskProps {
    taskData: TaskType;
    index: number;
}
const Task = ({ taskData, index }: TaskProps) => {
    return (
        <Draggable draggableId={taskData.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="single-task"
                >
                    <div className="task-details">
                        <p>{taskData.title}</p>
                    </div>
                    <div className="add-comment">
                        <p>Add comment</p>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
