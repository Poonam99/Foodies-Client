import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservices from "../../Pages/Allservices/Allservices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>
                    fetch('Fakedata.json')
            },
            {
                path: '/Allservices',
                element: <Allservices></Allservices>,
                loader: () =>
                    fetch('Fakedata.json')
            },
            {
                path: '/Blogs',
                element: <Blogs></Blogs>

            }
        ]
    }
])
export default router;