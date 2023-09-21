import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { typicodeApi } from "@shared/api"
import { state as initialState } from "@entities/task/model/initialState"
import { ResponseTask } from "@shared/api/typicode/models"
import { taskConverter } from "@entities/task/lib/converter"
import { Task } from "@entities/task/lib/types"

const getTasksList = createAsyncThunk(
  "task/fetchTasksList",
  async (
    params: typicodeApi.tasks.GetTasksListParams | undefined = {},
    { rejectWithValue },
  ) => {
    try {
      const response = await typicodeApi.tasks.getTasksList(params)
      return response.data
    } catch (e) {
      return rejectWithValue("Ошибка получение задач")
    }
  },
)

const slice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setCompleted: (
      state,
      action: PayloadAction<{ id: ResponseTask["id"]; value: boolean }>,
    ) => {
      state.list = state.list.map((item) => {
        if (item.id !== action.payload.id) return item
        return {
          ...item,
          completed: action.payload.value,
        }
      })
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTasksList.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getTasksList.fulfilled, (state, action) => {
        if (!(action.payload && Array.isArray(action.payload))) return
        state.list = action.payload.reduce<Task[]>((acc, item) => {
          if (item) acc.push(taskConverter(item))
          return acc
        }, [])
        state.isLoading = false
      })
      .addCase(getTasksList.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const actions = {
  ...slice.actions,
  getTasksList,
}

export const reducer = slice.reducer
