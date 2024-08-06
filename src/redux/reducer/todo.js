import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  todos: [],
  status: "idle",
};

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  FAILED: "failed",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.todos = action.payload;
      })
      .addCase(getTodo.rejected, (state) => {
        state.status = STATUS.FAILED;
      })

      .addCase(addTodo.pending, (state) => {
        state.status = STATUS.LOADING;
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.status = STATUS.IDLE;
      })
      .addCase(addTodo.rejected, (state) => {
        state.status = STATUS.FAILED;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
        state.status = STATUS.IDLE;
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.status = STATUS.FAILED;
      })
      .addCase(markDone.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        );
        state.status = STATUS.IDLE;
      });
  },
});

export const getTodo = createAsyncThunk("fetch/getallTodos", async () => {
  try {
    
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/todo/gettodos`
    );

    const data = await res.json();
    // console.log(data);

    if (data.success) {
      
      return data.todos;
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong" || err);
  }
});

export const addTodo = createAsyncThunk("fetch/addTodo", async (todo) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/todo/createTodo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    );
    const data = await res.json();
    //   console.log(data);

    if (data.success) {
      toast.success(data.message);
      return data.todo;
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong" || err);
  }
});

export const deleteTodo = createAsyncThunk("fetch/deleteTodo", async (id) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/todo/deleteTodo/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.success) {
      toast.success(data.message);
      return data.todo._id;
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong" || err);

  }
});

export const markDone = createAsyncThunk("fetch/markDone", async (id) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/todo/markDone/${id}`,
      {
        method: "PUT",
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.success) {
      toast.success(data.message);
      return data.todo;
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong"|| err);
  }
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
