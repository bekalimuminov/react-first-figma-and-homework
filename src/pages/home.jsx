import Sidebar from "../components/sidebar.jsx";
import {mock} from "../allMocks/mock.jsx";
import {useState} from "react";

import searchIcon from "../assets/search-icon.svg";
import addIcon from "../assets/Icon2.png";
import eyeIcon from "../assets/eye.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/dalete.svg";

export default function Home() {
    const [data , setData] = useState(mock);

    function searchUser(e){
        const res = mock.filter(item => item.nomi.toLowerCase().includes(e.target.value));
        setData(res);
    }

    function changeAll(e){
        if (e.target.value === "Manzil") {
            setData(mock);
        } else {
            const res = mock.filter(item => item.manzil.includes(e.target.value));
            setData(res);
        }
    }

    function chengeSecond(e){
        if (e.target.value === "Status") {
            setData(mock);
        }else {
            const res = mock.filter(item => item.status === e.target.value);
            setData(res);
        }
    }
    return (<>
        <div className="max-w-[1200px] mx-auto mt-[100px]">
            <div className='flex'>
                <Sidebar/>
                <div className=" bg-[#F3F4F6] w-[1200px] h-[830px] overflow-y-hidden p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-[24px] font-[700]">Diller ro'yxati</h1>
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-[14px]">
                            <img src={addIcon} alt="img"/> Yangi diler qo'shish
                        </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 mb-4 flex items-center gap-2">
                        <img src={searchIcon} alt="img"/>
                        <input className="outline-none w-[1120px] text-[14px] text-gray-500" placeholder="Diler nomi yoki mas'ul shaxs bo'yicha qidirish..." onChange={searchUser}/>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-[14px]" onChange={chengeSecond}>
                            <option>Status</option>
                            <option>Faol</option>
                            <option>Faol emas</option>
                        </select>
                        <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-[14px]" onChange={changeAll} >
                            <option>Manzil</option>
                            <option>Toshkent</option>
                            <option>Samarqand</option>
                            <option>Buxoro</option>
                            <option>Farg'ona</option>
                        </select>
                    </div>
                    <div className="bg-white max-w-[1118px] h-[400px] overflow-scroll">
                        <div className="grid grid-cols-6 px-4 py-3 items-center">
                            <div><input type="checkbox"/></div>
                            <p className="text-[12px] font-[600] text-gray-500">DILER NOMI</p>
                            <p className="text-[12px] font-[600] text-gray-500">MAS'UL SHAXS</p>
                            <p className="text-[12px] font-[600] text-gray-500">MANZIL</p>
                            <p className="text-[12px] font-[600] text-gray-500">STATUS</p>
                            <p className="text-[12px] font-[600] text-gray-500">HARAKATLAR</p>
                        </div>
                        {
                            data.length ? (
                                data.map((row) => (
                                    <div key={row.id} className="grid grid-cols-6 px-4 py-3 border-t border-gray-100 items-center">
                                        <div><input type="checkbox"/></div>
                                        <div>
                                            <p className="text-[14px]">{row.nomi}</p>
                                            <p className="text-[12px] text-gray-400">ID: {row.id}</p>
                                        </div>
                                        <div>
                                            <p className="text-[14px]">{row.shaxs}</p>
                                            <p className="text-[12px] text-gray-400">{row.tel}</p>
                                        </div>
                                        <div>
                                            <p className="text-[14px]">{row.manzil}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full w-[50px] text-[12px] font-[500] ${row.status === "Faol" ? "bg-[#DCFCE7] text-green-600" : "bg-[#FEE2E2] w-[80px] text-red-500"}`}>
                                                {row.status}
                                            </span>
                                        <div className="flex items-center gap-3">
                                            <img src={eyeIcon} alt="view" className="cursor-pointer"/>
                                            <img src={editIcon} alt="edit" className="cursor-pointer"/>
                                            <img src={deleteIcon} alt="delete" className="cursor-pointer"/>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="ml-[250px] mt-[50px]">
                                    <h1 className="text-[30px] text-red-400">bro bu yerda siz qidirgan inson yuq</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}