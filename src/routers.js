import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout";
import GridPage from "./pages/GridPage";
import TablePage from "./pages/TablePage";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <GridPage />,
            },
            {
                path: "TablePage",
                element: <TablePage />,
            },
        ],
    },
]);