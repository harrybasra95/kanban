import { Droppable } from 'react-beautiful-dnd';
import TaskType from '../../types/task';
import Task from '../Task/Task';
import './TaskList.scss';

interface TaskListProps {
    title: string;
    data: {
        title: string;
        items: TaskType[];
    };
}
const TaskList = ({ title, data }: TaskListProps) => {
    return (
        <Droppable droppableId={title}>
            {(provided) => (
                <div className="task-list-container">
                    <div className="list-title">{data.title}</div>
                    <div
                        ref={provided.innerRef}
                        className={`single-tasks-container  ${title}-style-container`}
                    >
                        {data.items.map((taskData, index) => (
                            <Task
                                index={index}
                                key={taskData.id}
                                taskData={taskData}
                                {...provided.droppableProps}
                            ></Task>
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;
