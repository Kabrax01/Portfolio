import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Main from "./pages/main/Main";
import ProjectsSlider from "./pages/projects/ProjectsSlider";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Main /> },
            { path: "/projects", element: <ProjectsSlider /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
