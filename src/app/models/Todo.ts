export type TodoStatus = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE';

export interface Todo {
    id?: number;
    text: string;
    deadline: string;
    status: TodoStatus;
}