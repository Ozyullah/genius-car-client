import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Check from "../../Pages/CheackOut/Check";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Searvices from "../../Pages/Home/Searvices/Searvices";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
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
            },
            {
                path:'/checkout/:id',
                element:<Check></Check>,
                loader:({ params })=>fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<Orders></Orders>
            }

        ]
        
    }
]);


export default router;