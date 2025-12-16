import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskCard from './TaskCard'
import { deleteTask, toggleComplete } from './taskSlice'

function TaskList({ onEdit }) {

    const tasks = useSelector((s) => s.tasks.tasks)
    const dispatch = useDispatch()

    const sorted = useMemo(() => {
        return [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }, [tasks])

    if (!sorted.length) return <div className='p-6 text-center text-gray-500'> No Tasks Yet, CREATE One</div>

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {sorted.map((t) => (
                <TaskCard
                    key={t.id}
                    task={t}
                    onDelete={(id) => dispatch(deleteTask(id))}
                    onToggle={(id) => dispatch(toggleComplete(id))}
                    onEdit={onEdit}
                />
            ))}
        </div>
    )
}

export default TaskList