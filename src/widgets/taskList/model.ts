import { useAppDispatch, useTypeSelector } from "@shared/lib/hooks"
import { useEffect } from "react"
import { TaskModel } from "@entities/task"

export const useModel = () => {
  const { list, isLoading } = useTypeSelector((state) => state.task)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(TaskModel.actions.getTasksList())
  }, [])
  return { list, isLoading }
}
