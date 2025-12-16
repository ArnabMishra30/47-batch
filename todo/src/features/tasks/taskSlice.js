import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const loadFromLocal = () => {
    try {
        const raw = localStorage.getItem('taskFlow_tasks')
        return raw ? JSON.parse(raw) : []
    } catch (e) {
        return [];
    }
}

const saveToLocal = (tasks) => {
    try {
        localStorage.setItem('taskFlow_tasks', JSON.stringify(tasks))
    } catch (e) { }
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: loadFromLocal(),
    },
    reducers: {
        addTask: {
            reducer(state, action) {
                state.tasks.push(action.payload)
                saveToLocal(state.tasks)
            },
            prepare({ title, description, category }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        category,
                        completed: false,
                        createdAt: new Date().toISOString(),
                    }
                }
            }
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload)
            saveToLocal(state.tasks)
        },
        toggleComplete(state, action) {
            const t = state.tasks.find((x) => x.id === action.payload)
            if (t) t.completed = !t.completed
            saveToLocal(state.tasks)
        },
        updateTask(state, action) {
            const idx = state.tasks.findIndex((t) => t.id === action.payload.id)
            if (idx !== -1) {
                state.tasks[idx] = { ...state.tasks[idx], ...action.payload }
                saveToLocal(state.tasks)
            }
        }
    }
})

export const { addTask, deleteTask, toggleComplete, updateTask } = taskSlice.actions
export default taskSlice.reducer;