import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { TaskModel } from "@entities/task/"

export const store = configureStore({
  reducer: {
    task: TaskModel.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
