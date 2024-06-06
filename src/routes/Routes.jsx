import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Destination from "../components/Destination";
import Hotels from "../layout/Hotels";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import MyBooking from "../pages/myBooking/MyBooking";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>
            
        },
        {
          path : '/:id',
          element : <Destination></Destination>,
          loader : ()=> fetch('destination.json')

        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : '/mybooking',
          element : <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        }
        
      ]
    },


    {
      path : '/hotels/:name',
      element : <PrivateRoute><Hotels></Hotels></PrivateRoute>,
      
    }
  ]);
  export default routes