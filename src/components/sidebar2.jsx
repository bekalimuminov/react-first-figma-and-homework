import logoIcon from "../assets/logo-icon.svg";
import dillerProfile from "../assets/dillerProfile.svg";
import omborIcon from "../assets/ombor.svg";
import dillerYetkazish from "../assets/dillerYetkazish.svg";
import dillerMashrut from "../assets/dillerMashrut.svg";
import sozlamalarIcon from "../assets/sozlamalar.svg";
import chiqishIcon from "../assets/chiqish.svg";
import dillerSavdo from "../assets/dillerSavdo.svg";
import { Link  , useLocation} from "react-router-dom";
import { useState } from "react";


export default function Sidebar2() {
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
                    <div  className={`flex items-center gap-3 p-3 rounded-lg cursor-not-allowed ${location.pathname === "/profile" ? "bg-blue-50" : ""}`}>
                        <img src={dillerProfile} alt="icon" />
                        <Link to="/profile" className={location.pathname === "/profile" ? "text-[#135BEC]" : " dark:text-white"}>Diller Profile</Link>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={omborIcon} alt="icon" />
                        <p className="text-black dark:text-white">Diller ombori</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={dillerSavdo} alt="icon" />
                        <p className="dark:text-gray-300">Diller savdosi</p>
                    </div>
                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-not-allowed ${location.pathname === "/ombor" ? "bg-blue-50" : ""}`}>
                        <img src={dillerYetkazish} alt="icon" />
                        <Link to="/ombor" className={location.pathname === "/ombor" ? "text-[#135BEC]" : "dark:text-white"}>Yetkazib berishlar</Link>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={dillerMashrut} alt="icon" />
                        <p className="dark:text-gray-300">Savdo va to'lovlar</p>
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