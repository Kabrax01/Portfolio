import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Main from "./pages/main/Main";
import ProjectsSlider from "./pages/projects/ProjectsSlider";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            children: [
                { path: "/Portfolio/", element: <Main /> },
                { path: "/Portfolio/projects", element: <ProjectsSlider /> },
                { path: "/Portfolio/contact", element: <Contact /> },
            ],
        },
    ],
    { basename: "/Portfolio" }
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
