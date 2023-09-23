/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return process.env[key] || ""
}

/** API entrypoint */
export const API_URL = getEnvVar("VAR_API_URL")
/** Режим разработки */
export const isDevEnv = getEnvVar("NODE_ENV") === "development"
// /** Режим продакшена */
export const isProdEnv = getEnvVar("NODE_ENV") === "production"
