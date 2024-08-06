import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo ,markDone } from "../redux/reducer/todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log(todos);
  const dispatch = useDispatch();

  const handleOnDelete = async (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  }
  
  const handleOnComplete = async (id) => {
    console.log(id);
    dispatch(markDone(id));
  }
  return (
    <section className="  my-4 body-font relative  bg-[#282c34] ">
      <div className="container px-5 py-2 mx-auto">
        {todos &&
          todos?.map((todo, index) => (
            <div key={todo._id} className="p-4 w-full">
              <div className="h-full border-2 border-gray-800 flex justify-between  border-opacity-60 p-8 rounded">
                <div>
                  <h2
                    className={`text-xl  font-medium  mb-2 ${
                      todo && todo.completed
                        ? "line-through text-gray-400"
                        : "text-white "
                    }}`}
                  >
                    {todo.title}
                  </h2>
                  <p
                    className={`leading-relaxed mb-5 ${
                      todo && todo.completed
                        ? "line-through text-gray-400"
                        : "text-white "
                    }`}
                  >
                    {todo.description}
                  </p>
                </div>
                <div className="space-x-3">
                  <button
                    className={`text-green-400 bg-white border-2 hover:text-white border-green-500 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg ${
                      todo && todo.completed ? "hidden" : ""
                      }`}
                    onClick={() => handleOnComplete(todo._id)}
                  >
                    Success
                  </button>
                  <button onClick={()=>handleOnDelete(todo._id)}  className="text-red-500 bg-white border-2 hover:text-white border-red-400 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-lg text-lg">
                    Delete
                  </button>
                </div>
              </div>
              <br className="w-full border-2 " />
            </div>
          ))}
      </div>
    </section>
  );
};

export default TodoList;
