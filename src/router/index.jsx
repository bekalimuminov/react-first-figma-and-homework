import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DillerOmbor from "../pages/dillerOmbor.jsx";
import ErrorPage from "../pages/errorPages.jsx";
import UseStorePages from "../pages/UseStorePages.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ombor" element={<DillerOmbor />} />
            <Route path="/useStorePages" element={<UseStorePages />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
