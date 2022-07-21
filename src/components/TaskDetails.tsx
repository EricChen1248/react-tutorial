import React from 'react'
import { useParams } from 'react-router-dom';


type TaskDetailsParams =  {
    id: string
}
export default function TaskDetails() {

    const params = useParams<TaskDetailsParams>();
    return (
        <div>Task: {params.id}</div>
    )
}
