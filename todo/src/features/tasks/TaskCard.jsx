import React from 'react'

function TaskCard({ task, onDelete, onToggle, onEdit }) {
    return (
        <div className='bg-white rounded-lg p-6 border shadow-sm'>
            <div className='flex justify-between items-start'>
                <div>
                    <h3 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
                    <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>{task.description}</p>
                    <div className='mt-2 text-xs text-gray-500'>
                        {task.category || 'General'}
                    </div>
                </div>
                <div className='space-y-2 text-right'>
                    <button onClick={() => onToggle(task.id)} className='px-3 py-1 rounded border text-sm'>{task.completed ? 'Undo' : 'Done'}</button>
                    <div className='flex gap-2 mt-2'>
                        <button onClick={() => onEdit(task)} className='px-3 py-1 rounded bg-indigo-50 text-indigo-500 text-sm'>Edit</button>
                        <button onClick={() => onDelete(task.id)} className='px-3 py-1 rounded bg-red-50 text-red-500 text-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard