import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'

function CreateTask() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const editing = location.state?.editing || null

    const [title, setTile] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        if (editing) {
            setTile(editing.title)
            setDescription(editing.description)
            setCategory(editing.category)
        }
    }, [editing])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return alert('title required')
        if (editing) {
            dispatch(updateTask({
                id: editing.id, title, description, category
            }))
        } else {
            dispatch(addTask({
                title, description, category
            }))
        }
        navigate('/tasks')
    }

    return (
        <div className='max-w-3xl mx-auto p-6'>
            <h2 className='text-xl font-semibold mb-4'>
                {editing ? 'Edit Task' : 'Add Task'}
            </h2>
            <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded shadow-sm border'>
                <div>
                    <label className='block text-sm font-medium mb-1'>Title</label>
                    <input value={title} onChange={(e)=>setTile(e.target.value)} className='w-full border rounded px-3 py-2'/>
                </div>
                <div>
                    <label className='block text-sm font-medium mb-1'>Description</label>
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='w-full border rounded px-3 py-2' rows={4}/>
                </div>
                <div>
                    <label className='block text-sm font-medium mb-1'>Category</label>
                    <input value={category} onChange={(e)=>setTile(e.target.value)} className='w-full border rounded px-3 py-2'/>
                </div>
                <div className='flex gap-2'>
                    <button type='submit' className='px-4 py-2 bg-indigo-600 text-white rounded'>Save</button>
                    <button type='button' className='px-4 py-2 border rounded' onClick={()=>navigate('/tasks')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask