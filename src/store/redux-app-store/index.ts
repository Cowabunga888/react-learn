import { configureStore } from '@reduxjs/toolkit'
import todoFormSlice from './slices/todo-form-slice'

export const appStore = configureStore({
	reducer: {
		todoForm: todoFormSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
