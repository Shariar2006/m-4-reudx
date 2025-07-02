import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    users: IUser[]
}

const initialState: IInitialState = {
    users: [
        {
            id: "fdskjak",
            name: "emon"
        },
        {
            id: "fdskjak",
            name: "shariar"
        },
    ],
}

type DriftUser = Pick<IUser, "name">

const createUser = (userData: DriftUser): IUser => {
    return { id: nanoid(), ...userData }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DriftUser>) => {
            const user = createUser(action.payload)
            state.users.push(user)
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
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

export const users = (state: RootState) => {
    return state.users.users
}

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer