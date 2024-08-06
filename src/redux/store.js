import { configureStore } from "@reduxjs/toolkit";
import todo from "./reducer/todo";

export const store = configureStore({
  reducer: {
    todos: todo,
  },
});
