import searchIcon from "../assets/search-icon.svg";
import homeIcon from "../assets/homeProfile.svg";
import { useSelector } from "react-redux";

export default function Header() {
    const { email } = useSelector((state) => state.auth);
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-[#1E1E2E] border-b border-gray-200 dark:border-gray-700">

            <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#13131F] rounded-lg px-4 py-2 w-72">
                <img src={searchIcon} alt="search" className="w-4 h-4"/>
                <input
                    type="text"
                    placeholder="Search dealers, products..."
                    className="bg-transparent outline-none text-sm text-gray-500 dark:text-gray-300 w-full"
                />
            </div>

            <div className="flex items-center gap-4">

                <div className="flex items-center gap-3">
                    <img src={homeIcon} alt="img" className="w-9 h-9 rounded-full bg-orange-300 flex items-center justify-center text-white font-semibold text-sm"/>
                    <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">{email}</p>
                        <p className="text-xs text-gray-400">{email === 'admin' ? "Admin" : "user"}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}