import Comment from './comment';

export default interface Task {
    id: string;
    title: string;
    comments: Comment[];
}
