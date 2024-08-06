import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../redux/reducer/todo';
import toast from "react-hot-toast";
const TodoForm = () => {

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleOnTodo = async () => {
    if (!title || !description) {
      toast.error("Please fill all the fields");
      return;
    }

    const data = {
      title,
      description,
  
    };
    // console.log(data);
    

    dispatch(addTodo(data));
    setTitle("");
    setDescription("");
  }
  return (
    <section className="text-white  my-4 body-font relative  bg-[#282c34] ">
      <div className="container  py-2 mx-auto">
        <div className="flex flex-col text-center w-full ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Add Todo
          </h1>
        </div>
        <div className="lg:w-full px-4 md:w-2/3 pb-3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/3">
              <div className="relative">
                <label htmlFor="title" className="leading-7 text-sm text- white ">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full  bg-opacity-50 rounded border border-none focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/3">
              <div className="relative">
                <label htmlFor="description" className="leading-7 text-lg text-white ">
                  Desciption
                </label>
                <input
                  type="desciption"
                  id="desciption"
                  name="desciption"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full  bg-opacity-50 rounded border border-none focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/3">
              <button onClick={handleOnTodo} className="flex mx-auto text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoForm;
