import {useState} from "react";
import Sidebar from "../components/sidebar.jsx";
import {mock2, stats} from "../allMocks/mock.jsx";

import searchIcon from "../assets/search-icon.svg";
import filterIcon from "../assets/filter.svg";
import saralashIcon from "../assets/saralash.svg";
import omborIcon from "../assets/ombor.svg";

function statusColor(status) {
    if (status === "Yetkazilgan") return "bg-green-100 text-green-600";
    if (status === "Yo'lda") return "bg-blue-100 text-blue-600";
    if (status === "Bekor qilinga") return "bg-red-100 text-red-500";
    return "bg-yellow-100 text-yellow-600";
}

export default function DillerOmbor() {
    const [data, setData] = useState(mock2);

    function searchUser(e) {
        const res = mock2.filter(item => item.id.toLowerCase().includes(e.target.value.toLowerCase()));
        setData(res);
    }

    return (
        <div className="flex h-screen w-screen">
            <Sidebar/>
            <div className="flex-1 bg-[#F3F4F6] overflow-y-auto p-6">

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-[24px] font-[700]">Yetkazib berish</h1>
                        <p className="text-[13px] text-gray-400">Barcha mahsulot yetkazib berishlarini kuzatib boring.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="border border-gray-200 bg-[#F3F4F6] px-4 py-2 rounded-lg text-[14px] flex items-center gap-2">
                            <img src={omborIcon} alt="img"/>
                            <select className="bg-[#F3F4F6]">
                                <option>Oxirgi 30 kun</option>
                                <option>Oxirgi 20 kun</option>
                                <option>Oxirgi 10 kun</option>
                            </select>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[14px]">+ Yangi yetkazib be...</button>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {stats.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 border border-gray-100">
                            <div className="flex gap-4">
                                <img src={item.image} alt="img"/>
                                <div>
                                    <p className="text-[14px] text-gray-500 w-[100px]">{item.label}</p>
                                    <p className="text-[28px] font-[700]">{item.value}</p>
                                </div>
                            </div>
                            <p className={`text-[12px] mt-1 ${item.up ? "text-[#16A34A]" : "text-[#DC2626]"}`}>
                                {item.up ? "↑" : "↓"} <span>{item.change}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                        <h2 className="text-[16px] font-[600]">Barcha yetkazib berishlar</h2>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                        <div className="border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-2 w-[400px]">
                            <img src={searchIcon} alt="img"/>
                            <input className="outline-none text-[14px] text-gray-500 w-full" placeholder="ID, diler, do'kon bo'yicha qidirish..." onChange={searchUser}/>
                        </div>
                        <div className="flex gap-2">
                            <button className="border border-gray-200 px-4 py-2 rounded-lg text-[14px] flex items-center gap-2">
                                <img src={filterIcon} alt="img"/> Filter
                            </button>
                            <button className="border border-gray-200 px-4 py-2 rounded-lg text-[14px] flex items-center gap-2">
                                <img src={saralashIcon} alt="img"/> Saralash
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 px-4 py-3 border-b border-gray-100">
                        <p className="text-[12px] font-[600] text-gray-500">YETKAZIB BERISH ID</p>
                        <p className="text-[12px] font-[600] text-gray-500">SANA</p>
                        <p className="text-[12px] font-[600] text-gray-500">JO'NATUVCHI</p>
                        <p className="text-[12px] font-[600] text-gray-500">QABUL QILUVCHI</p>
                        <p className="text-[12px] font-[600] text-gray-500">MAHSULOTLAR</p>
                        <p className="text-[12px] font-[600] text-gray-500">MIQDORI</p>
                        <p className="text-[12px] font-[600] text-gray-500">STATUS</p>
                    </div>

                    {data.length ? (
                        data.map((row) => (
                            <div key={row.id} className="grid grid-cols-7 px-4 py-3 border-t border-gray-100 items-center">
                                <p className="text-[14px] font-[500]">{row.id}</p>
                                <p className="text-[14px]">{row.sana}</p>
                                <p className="text-[14px]">{row.jonatuvchi}</p>
                                <p className="text-[14px]">{row.qabul}</p>
                                <p className="text-[14px] text-gray-500">{row.mahsulot}</p>
                                <p className="text-[14px]">{row.miqdor}</p>
                                <span className={`px-3 py-1 rounded-full text-[12px] font-[500] w-fit ${statusColor(row.status)}`}>
                                    {row.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center py-16">
                            <h1 className="text-[30px] text-red-400">bro bu yerda siz qidirgan diller yuq</h1>
                        </div>
                    )}

                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                        <p className="text-[13px] text-gray-500">Showing 1 to 6 of 1,420 results</p>
                        <div className="flex gap-1">
                            <button className="border border-gray-200 px-3 py-1 rounded text-[13px]">‹</button>
                            <button className="border border-gray-200 px-3 py-1 rounded text-[13px]">›</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}