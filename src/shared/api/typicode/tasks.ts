import type { AxiosPromise } from "axios"
import { apiInstance } from "./base"
import type { ResponseTask } from "./models"

const BASE_URL = "/todos"

export type GetTasksListParams = {
  userId?: number
  completed?: boolean
}

export const getTasksList = (
  params?: GetTasksListParams,
): AxiosPromise<ResponseTask[]> => {
  return apiInstance.get(BASE_URL, { params })
}

export type GetTaskByIdParams = {
  taskId: number
  [x: string]: any
}

export const getTaskById = ({
  taskId,
  ...params
}: GetTaskByIdParams): AxiosPromise<ResponseTask> => {
  return apiInstance.get(`${BASE_URL}/${taskId}`, { params })
}
