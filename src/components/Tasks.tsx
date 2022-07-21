import { TaskModel } from "../models/Task"
import Task from "./Task"

interface tasksProps {
    tasks: TaskModel[];
    onDelete(id: number): void;
    onToggle(id: number): void;
}

export const Tasks = ({ tasks, onDelete, onToggle }: tasksProps) => {
    return (
        <>
            {tasks.map(task => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}
