import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import DillerOmbor from "../pages/dillerOmbor.jsx";
import ErrorPage from "../pages/errorPages.jsx";
import UseStorePages from "../pages/UseStorePages.jsx";
import LoginPage from "../pages/loginPage.jsx";
import ProfilePage from "../pages/adminPage/index.jsx";

function App() {

    const { isLogin  , isAdmin} = useSelector((state) => state.auth);

    return (
        <Routes>
            <Route path="/login" element={!isLogin ? <LoginPage /> : <Navigate to={isAdmin === 'admin' ? "/profile" : "/"}/>}/>
            <Route path="/" element={isLogin ? <Home /> : <Navigate to="/login" />}/>
            <Route path="/ombor" element={isLogin ? <DillerOmbor /> : <Navigate to="/login" />}/>
            <Route path="/useStorePages" element={isLogin ? <UseStorePages /> : <Navigate to="/login" />}/>
            <Route path="/profile" element={isLogin ? <ProfilePage /> : <Navigate to="/login" />}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;