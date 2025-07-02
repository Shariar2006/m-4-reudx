import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './features/task/taskSlice'
import userSlice from './features/user/userSlice'
// ...

export const store = configureStore({
  reducer: {
    todos: taskSlice,
    users: userSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch