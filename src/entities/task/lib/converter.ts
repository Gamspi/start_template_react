import { ResponseTask } from "@shared/api/typicode/models"
import { checkProperty } from "@shared/lib/helpers/checkProperty"

export function taskConverter(item: ResponseTask) {
  const id = checkProperty(item, "id")
  const title = checkProperty(item, "title")
  const userId = checkProperty(item, "userId")
  const completed = checkProperty(item, "completed")

  return {
    id,
    title,
    userId,
    completed,
  }
}
