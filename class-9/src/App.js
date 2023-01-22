import React, {lazy, Suspense} from "react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Error from "./Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={(<h1>Loading...</h1>)}>
                        <About/>
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile", // parentPath/{path} => localhost:1234/about/profile
                        element: <Profile/>,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart/>
                    </Suspense>
                ),
            }
        ],
    },
    {
        path: "/about",
        element: <About/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<RouterProvider router={appRouter}/>);
