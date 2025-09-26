import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Navigate
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        JSON.parse(localStorage.getItem("user")) || false
    );
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={isAuthenticated ? <HomePage /> : <Navigate to="/signup" />} />
                <Route path="/jobs" element={isAuthenticated ? <JobsPage /> : <Navigate to="/signup" />} />
                <Route path="/add-job" element={isAuthenticated ? <AddJobPage /> : <Navigate to="/signup" />} />
                <Route path="/edit-job/:id" element={isAuthenticated ? <EditJobPage /> : <Navigate to="/signup" />} />
                <Route path="/jobs/:id" element={isAuthenticated ? <JobPage /> : <Navigate to="/signup" />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/signup" element={
                    !isAuthenticated ? (
                        <SignupPage setIsAuthenticated={setIsAuthenticated} />
                    ) : (
                        <Navigate to="/" />
                    )
                } />
                <Route path="/login" element={!isAuthenticated ? (
                    <LoginPage setIsAuthenticated={setIsAuthenticated} />
                ) : (
                    <Navigate to="/" />
                )
                } />

            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
