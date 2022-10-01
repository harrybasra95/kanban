import TaskListType from './taskList';

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: string) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    updatedTasks: ({ updatedTasks }: { updatedTasks: TaskListType }) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
    taskDragged: ({
        source,
        destination,
    }: {
        source: DropItem;
        destination: DropItem;
    }) => void;
}

interface DropItem {
    droppableId: string;
    index: number;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}
