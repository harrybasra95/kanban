import Task from './task';

export default interface TaskListType {
    [key: string]: {
        title: string;
        items: Task[];
    };
}
