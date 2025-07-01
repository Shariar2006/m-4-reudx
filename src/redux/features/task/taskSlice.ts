import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface IInitialState {
    tasks: ITask[]
}

const initialState: IInitialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4();

            const taskData = {
                ...action.payload,
                id,
                isCompleted: false
            }

            state.tasks.push(taskData)
        }
    }
})

export const tasks = (state: RootState) => {
    return state.todos.tasks
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer