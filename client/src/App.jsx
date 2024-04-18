import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Login from './components/Login/login'
import SendOtp from "./components/Login/sendOtp";
import UserDetails from "./components/Login/userDetailes"

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

      },
      {
        path:'/userDetails',
        element:<UserDetails/>

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
