import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Users from "../pages/Users";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/users",
                element: <Users/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    }
])

export default router