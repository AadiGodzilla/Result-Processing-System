import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import ResetPage from "../Pages/Reset/Reset";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/reset" element={<ResetPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
