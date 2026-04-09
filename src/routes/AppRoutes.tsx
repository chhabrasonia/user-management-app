import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import AddUserPage from "../pages/AddUserPage"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/add" element={<AddUserPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;