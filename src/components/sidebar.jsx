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

export default function Sidebar() {
    return (
        <div className="w-[256px] h-screen bg-white">

            <div className="flex items-center gap-2 p-4">
                <img src={logoIcon} alt="logo" />
                <p className="text-[18px] font-[700]">DMS Portal</p>
            </div>

            <div className="p-2">
                <div className="flex items-center gap-3 py-[10px] max-w-[223px] pl-[15px] rounded-lg bg-blue-50">
                    <img src={dashboardIcon} alt="icon" />
                    <p className="text-[#135BEC]">Dashboard</p>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed">
                    <img src={dillerlarIcon} alt="icon" />
                    <p>Dillerlar</p>
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
                <div className="flex items-center gap-3 p-3 rounded-lg cursor-not-allowed mt-[294px]">
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