import { createBrowserRouter } from "react-router-dom";
import Category from "../../Components/Category/Category";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Register from "../../Components/Login/Register/Register";
import NotFound from "../../Components/Shared/NotFound/NotFound";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'courses',
                element: <Courses/>,
                // loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category/>,
                // loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            },
            {
                path: '/coursesDetails/:id',
                element: <Courses/>,
                // loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }

        ]
    }
])