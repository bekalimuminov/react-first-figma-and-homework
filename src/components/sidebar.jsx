import logoIcon from "../assets/logo-icon.svg";
import dashboardIcon from "../assets/dashboard.svg";
import dillerlarIcon from "../assets/dillerlar.svg";
import omborIcon from "../assets/ombor.svg";
import dokonlarIcon from "../assets/dokonlar.svg";
import hisobotlarIcon from "../assets/hisobotlar.svg";
import savdoIcon from "../assets/savdo.svg";
import adminIcon from "../assets/admin.svg";
import sozlamalarIcon from "../assets/sozlamalar.svg";
import chiqishIcon from "../assets/chiqish.svg";
import { Link  , useLocation} from "react-router-dom";
import { useState } from "react";


export default function Sidebar() {
    const location = useLocation();
    const [dark , setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );


    function toggleDark() {
        const html = document.documentElement;

        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDark(true);
        }
    }

    return (
        <div className="dark:bg-[#1E1E2E] w-[220px] h-screen bg-white border-r border-gray-100 flex flex-col justify-between py-4">
            <div>
                <div className="flex items-center gap-2 p-4">
                    <img src={logoIcon} alt="logo" />
                    <p className="dark:text-white text-[18px] font-[700]">DMS Portal</p>
                </div>
                <div className="p-2 mt-[50px]">
                    <div className={`flex items-center gap-3 py-[10px] pl-[15px] rounded-lg ${location.pathname === "/" ? "bg-blue-50" : ""}`}>
                        <img src={dashboardIcon} alt="icon" />
                        <Link to="/" className={location.pathname === "/" ? "text-[#135BEC]" : " dark:text-white"}>Dashboard</Link>
                    </div>
                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${location.pathname === "/ombor" ? "bg-blue-50" : ""}`}>
                        <img src={dillerlarIcon} alt="icon" />
                        <Link to="/ombor" className={location.pathname === "/ombor" ? "text-[#135BEC]" : "dark:text-white"}>Dillerlar</Link>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={omborIcon} alt="icon" />
                        <p className="dark:text-gray-300">Ombor va inventarizatsiya</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={dokonlarIcon} alt="icon" />
                        <p className="dark:text-gray-300">Do'konlar</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={hisobotlarIcon} alt="icon" />
                        <p className="dark:text-gray-300">Hisobotlar</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={savdoIcon} alt="icon" />
                        <p className="dark:text-gray-300">Savdo va to'lovlar</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={adminIcon} alt="icon" />
                        <p className="dark:text-gray-300">Admin</p>
                    </div>
                    <div onClick={toggleDark} className="flex items-center gap-3 p-3 rounded-lg cursor-pointer border ml-[10px] max-w-[110px] rder-gray-200">
                        <p className={dark === false ? "text-black" : "text-white"}>{dark ? "☀️ light" : "🌙 dark"}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                    <img src={sozlamalarIcon} alt="icon" />
                    <p className="dark:text-gray-300">Sozlamalar</p>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                    <img src={chiqishIcon} alt="icon" />
                    <p className="dark:text-gray-300">Chiqish</p>
                </div>
            </div>
        </div>
    )
}