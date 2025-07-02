import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[],
    filter: 'all' | 'Low' | 'Medium' | 'High'
}

const initialState: IInitialState = {
    tasks: [],
    filter: 'all'
}

type DriftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DriftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DriftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task
            )
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        filterUpdate: (state, action: PayloadAction<'all' | 'Low' | 'Medium' | 'High'>) => {
            state.filter = action.payload
        }
    }
})

export const tasksFilter = (state: RootState) => {
    const filter = state.todos.filter

    if (filter === 'Low') {
        return state.todos.tasks.filter((task) => task.priority === 'Low')
    } else if (filter === 'Medium') {
        return state.todos.tasks.filter((task) => task.priority === 'Medium')
    } else if (filter === 'High') {
        return state.todos.tasks.filter((task) => task.priority === 'High')
    } else {
        return state.todos.tasks
    }
}

export const tasks = (state: RootState) => {
    return state.todos.tasks
}

export const { addTask, toggleCompleteState, deleteTask, filterUpdate } = taskSlice.actions;

export default taskSlice.reducer