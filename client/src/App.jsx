import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Login from './components/Login/login'
import SendOtp from "./components/Login/sendOtp";

function App() {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/login',
        element:<SendOtp/>

      }
    ]
  )
  
  return (
    <>
       <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
