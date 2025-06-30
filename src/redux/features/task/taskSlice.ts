import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[]
}

const initialState: IInitialState = {
tasks:[
    {
        id: "dfkjdkj",
        title: "initialize redux",
        description: "create home page and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "High"
    },
]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{}
})

export const tasks = (state: RootState)=>{
    return state.todos.tasks
}

export default taskSlice.reducer