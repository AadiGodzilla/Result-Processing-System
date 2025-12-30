import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import ResetPage from "../Pages/Reset/Reset";
import PopupStateProvider from "../Contexts/PopupContext";
import { ResultModifyDataProvider } from "../Contexts/ResultModifyData";
import axios from "axios";
import { useEffect } from "react";
import { StudentDataProvider } from "../Contexts/StudentDataContext";

function App() {
    return (
        <>
            <StudentDataProvider>
                <ResultModifyDataProvider>
                    <PopupStateProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/reset" element={<ResetPage />} />
                            </Routes>
                        </BrowserRouter>
                    </PopupStateProvider>
                </ResultModifyDataProvider>
            </StudentDataProvider>
        </>
    );
}

export default App;
