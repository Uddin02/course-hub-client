import { createBrowserRouter } from "react-router-dom";
import Category from "../../Components/Category/Category";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Register from "../../Components/Login/Register/Register";
import CourseDetails from "../../Components/PrivateRoutes/CourseDetails/CourseDetails";
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
                loader: () => fetch('http://localhost:5000/courses-details')
            },
            {
                path: '/category/:id',
                element: <Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/coursesDetails/:id',
                element: <CourseDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/coursesDetails/${params.id}`)
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