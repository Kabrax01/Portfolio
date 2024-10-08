import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Main from "./pages/main/Main";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Main /> },
            { path: "/projects", element: <Projects /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
