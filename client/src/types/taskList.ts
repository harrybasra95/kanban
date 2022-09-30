import Task from './task';

export default interface TaskList {
    [key: string]: {
        title: string;
        items: Task[];
    };
}
