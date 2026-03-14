import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DillerOmbor from "../pages/dillerOmbor.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ombor" element={<DillerOmbor />} />
        </Routes>
    );
}

export default App;
