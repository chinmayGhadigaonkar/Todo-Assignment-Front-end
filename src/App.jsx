import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useDispatch } from 'react-redux'
import { getTodo } from './redux/reducer/todo'
import { Toaster } from 'react-hot-toast'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getTodo());
  })
  // console.log('VITE_BACKEND_URL:', import.meta.env.VITE_BACKEND_URL);
  
  

  return (
    <>
  
{/* Same as */}
      <h1 className='text-center text-3xl pt-2 '>My Todos</h1>
      <TodoForm />
      <TodoList />
      <Toaster />
    </>
  )
}

export default App
