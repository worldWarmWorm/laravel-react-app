import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./src/views/Login.jsx";
import Signup from "./src/views/Signup.jsx";
import Users from "./src/views/Users.jsx";
import NotFound from "./src/views/NotFound.jsx";
import DefaultLayout from "./src/components/DefaultLayout.jsx";
import GuestLayout from "./src/components/GuestLayout.jsx";
import Dashboard from "./src/views/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/users"/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
])

export default router
