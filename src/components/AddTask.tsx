import React, { useState } from 'react'
import { TaskModel } from '../models/Task'

interface addTaskProps {
    onAdd(task: {
        text: string,
        day: string,
        reminder: boolean,
    }): void
}

export default function AddTask({ onAdd } : addTaskProps) {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!text) {
            alert("Please add task");
            return;
        }
        var task = {
            text: text,
            day: day,
            reminder: reminder,
        };
        onAdd(task)

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" name="" id="" placeholder="Add Task" value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" name="" id="" placeholder="Add Day & Time" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={e => setReminder(e.target.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}
