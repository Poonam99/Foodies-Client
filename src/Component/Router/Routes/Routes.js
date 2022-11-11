import { createBrowserRouter } from "react-router-dom";
import EditREview from "../../EditReviews/EditReviews";
import Main from "../../Layout/Main";
import MyReviews from "../../MyReviews/MyReviews";
import Addreviews from "../../Pages/AddReviews/Addreviews";
import AddServices from "../../Pages/AddServices/AddServices";
import Allservices from "../../Pages/Allservices/Allservices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/User/Login/Login";
import SignUp from "../../Pages/User/SignUp/SignUp";
import Service from "../../Service/Service";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>
                    fetch('https://food-service-app-server.vercel.app/homeservices')
            },
            {
                path: '/services',
                element: <Allservices></Allservices>,
                loader: () =>
                    fetch('https://food-service-app-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://food-service-app-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/services/:id/review',
                element: <PrivateRoute><Addreviews></Addreviews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-service-app-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute><EditREview></EditREview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-service-app-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/Blogs',
                element: <Blogs></Blogs>

            }
        ]
    }
])
export default router;