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
export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="w-[220px] h-screen bg-white border-r border-gray-100 flex flex-col justify-between py-4">
            <div>
                <div className="flex items-center gap-2 p-4">
                    <img src={logoIcon} alt="logo" />
                    <p className="text-[18px] font-[700]">DMS Portal</p>
                </div>
                <div className="p-2 mt-[50px]">
                    <div className={`flex items-center gap-3 py-[10px] pl-[15px] rounded-lg ${location.pathname === "/" ? "bg-blue-50" : ""}`}>
                        <img src={dashboardIcon} alt="icon" />
                        <Link to="/" className={location.pathname === "/" ? "text-[#135BEC]" : "text-gray-700"}>Dashboard</Link>
                    </div>
                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${location.pathname === "/ombor" ? "bg-blue-50" : ""}`}>
                        <img src={dillerlarIcon} alt="icon" />
                        <Link to="/ombor" className={location.pathname === "/ombor" ? "text-[#135BEC]" : "text-gray-700"}>Dillerlar</Link>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={omborIcon} alt="icon" />
                        <p>Ombor va inventarizatsiya</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={dokonlarIcon} alt="icon" />
                        <p>Do'konlar</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={hisobotlarIcon} alt="icon" />
                        <p>Hisobotlar</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={savdoIcon} alt="icon" />
                        <p>Savdo va to'lovlar</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                        <img src={adminIcon} alt="icon" />
                        <p>Admin</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                    <img src={sozlamalarIcon} alt="icon" />
                    <p>Sozlamalar</p>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                    <img src={chiqishIcon} alt="icon" />
                    <p>Chiqish</p>
                </div>
            </div>
        </div>
    )
}