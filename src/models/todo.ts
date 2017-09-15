import Base from './base';
import TodoLabel from './todo-label';

export default class Todo extends Base {
    tid: number;
    name: string;
    description: string;
    isCompleted: boolean;
    ordinal: number;
    labels: Array<TodoLabel>;
}
