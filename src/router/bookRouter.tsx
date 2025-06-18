import {lazy, Suspense} from "react";
import {Navigate} from "react-router";

const Loading = () => <div>Loading...</div>
const BookIndex  = lazy( () => import("../pages/book/indexPage.tsx"))
const BookList = lazy(() => import("../pages/book/listPage.tsx"))
const BookRead = lazy(() => import("../pages/book/readPage.tsx"))
const BookAdd = lazy(() => import("../pages/book/addPage.tsx"))
const BookModify =  lazy(() => import("../pages/book/modifyPage.tsx"))

const  bookRouter = () => {
    return (
        {
            path: "/book",
            Component: BookIndex,
            children: [
                {
                    path: "list",
                    element: <Suspense fallback={<Loading/>}><BookList/></Suspense>
                },
                {
                    path: "read/:bno",
                    element: <Suspense fallback={<Loading/>}><BookRead/></Suspense>
                },
                {
                    path: "add",
                    element: <Suspense fallback={<Loading/>}>< BookAdd/></Suspense>
                },
                {
                    path: "modify/:bno",
                    element: <Suspense fallback={<Loading/>}><BookModify/></Suspense>
                },
                {
                    path: "",
                    element: <Navigate to={"/book/list"}/>
                }
            ]
        }
    )

}

export default bookRouter
