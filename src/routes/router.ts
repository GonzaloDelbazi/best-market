import { createBrowserRouter } from "react-router-dom";
import { Home } from "../screens/home/home";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '*',
        Component: Home
    },

])

export default Router;