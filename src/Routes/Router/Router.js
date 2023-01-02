import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Searvices from "../../Pages/Home/Searvices/Searvices";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/searvices',
                element:<Searvices></Searvices>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            }

        ]
        
    }
]);


export default router;