import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    task: ITask[]
}

const initialState: IInitialState = {
task:[
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

export default taskSlice.reducer