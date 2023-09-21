import React, { lazy, memo, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "@pages/main"
import { TodoPage } from "@pages/todo"
import { NotFoundPage } from "@pages/notFoundPage"

const Layout = lazy(() => import("../layout/index"))
const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="todo"
          element={
            <Suspense>
              <TodoPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export const Component = memo(AppRouter)
