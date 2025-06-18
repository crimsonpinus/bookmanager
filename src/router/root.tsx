import {createBrowserRouter} from "react-router";
import {lazy, Suspense} from "react";
import BasicLayout from "../layouts/basicLayout.tsx";
import bookRouter from "./bookRouter.tsx";

const Loading = () => <div>Loading...</div>
const Main = lazy(() => import("../pages/mainPage"))
const About = lazy(() => import("../pages/aboutPage"))
const BookList = lazy(() => import("../pages/book/listPage.tsx"))


const router = createBrowserRouter([
    {
        path: "/",
        Component: BasicLayout,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Loading/>}><BookList/></Suspense>
            },
            bookRouter()
        ]
    }
]);

export default router
