import React, { lazy, Suspense, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Error from './Error';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './components/Cart';

const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About'));

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
    const [user, setUser] = useState({
        name: 'Amandeep Singh Saluja',
        email: 'amandeepsaluja25@gmail.com',
    });
    const newUser = { name: 'Rahul', email: 'rahul@gmail.com' };
    return (
        <>
            <Provider store={store}>
                {/*//Even we can pass in different data in different component if we need.*/}
                {/*<Header />*/}
                {/*// I want to use the user data across my application that's why i wrap it around UserContext.Provider*/}
                {/*It overrides the value of UserContext....*/}
                <UserContext.Provider value={{ user: user, setUser: setUser }}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
                <UserContext.Provider value={{ user: newUser }}>
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: 'profile', // parentPath/{path} => localhost:1234/about/profile
                        element: <Profile />,
                    },
                ],
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />,
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
    {
        path: '/about',
        element: <About />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<RouterProvider router={appRouter} />);
