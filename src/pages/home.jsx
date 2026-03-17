import Sidebar from "../components/sidebar.jsx";
import {mock} from "../allMocks/mock.jsx";
import {useState} from "react";
import searchIcon from "../assets/search-icon.svg";
import addIcon from "../assets/Icon2.png";
import eyeIcon from "../assets/eye.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/dalete.svg";
import whiteIcon from "../assets/whiteDeleteIcon.svg";
import eye from "../assets/eye.svg";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const perPage = 10;

export default function Home() {
    const [data, setData] = useState(mock);
    const [selected, setSelected] = useState([]);
    const [allData, setAllData] = useState(mock);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / perPage);
    const paginatedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);

    function deleteSelected() {
        const res = allData.filter(item => !selected.includes(item.id));
        setAllData(res);
        setData(res);
        setSelected([]);
        setCurrentPage(1);
    }

    function searchUser(e) {
        const res = allData.filter(item =>
            item.nomi.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.shaxs.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setData(res);
        setCurrentPage(1);
    }

    function toggleSelect(id) {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    }

    function deleteAccount(id) {
        const deleteUser = data.filter(item => item.id !== id);
        setData(deleteUser);
        setCurrentPage(1);
    }

    function changeAll(e) {
        if (e.target.value === "Manzil") {
            setData(allData);
        } else {
            const res = allData.filter(item => item.manzil.includes(e.target.value));
            setData(res);
        }
        setCurrentPage(1);
    }

    function chengeSecond(e) {
        if (e.target.value === "Status") {
            setData(allData);
        } else {
            const res = allData.filter(item => item.status === e.target.value);
            setData(res);
        }
        setCurrentPage(1);
    }

    return (<>
        <div className="flex h-screen w-screen">
            <Sidebar/>
            <div className="flex-1 bg-[#F3F4F6] overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-[24px] font-[700]">Diller ro'yxati</h1>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-[14px] cursor-not-allowed">
                        <img src={addIcon} alt="img"/> Yangi diler qo'shish
                    </button>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 mb-4 flex items-center gap-2">
                    <img src={searchIcon} alt="img"/>
                    <input className="outline-none w-[1120px] text-[14px] text-gray-500"
                           placeholder="Diler nomi yoki mas'ul shaxs bo'yicha qidirish..." onChange={searchUser}/>
                </div>
                <div className="flex gap-3 mb-4">
                    <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-[14px] cursor-pointer" onChange={chengeSecond}>
                        <option>Status</option>
                        <option>Faol</option>
                        <option>Faol emas</option>
                    </select>
                    <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-[14px] cursor-pointer" onChange={changeAll}>
                        <option>Manzil</option>
                        <option>Toshkent</option>
                        <option>Samarqand</option>
                        <option>Buxoro</option>
                        <option>Farg'ona</option>
                    </select>
                </div>
                <div className="flex items-center justify-between px-4 py-[10px] bg-[#135BEC1A] rounded-lg mb-4">
                    <p className="text-[14px] text-blue-600">{selected.length} diler tanlandi</p>
                    <div className="flex gap-2">
                        <button className="flex items-center border border-gray-300 bg-white w-[191px] h-[36px] rounded-lg text-[14px]">
                            <img className="ml-[10px]" src={eye} alt="img"/> Statusni o'zgartirish
                        </button>
                        <button onClick={deleteSelected} className="flex items-center bg-red-500 text-white w-[107px] h-[36px] rounded-lg text-[14px]">
                            <img className="ml-[15px]" src={whiteIcon} alt="img"/> O'chirish
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg">
                    <div className="grid grid-cols-6 px-4 py-3 items-center">
                        <div><input className="cursor-pointer" type="checkbox"/></div>
                        <p className="text-[12px] font-[600] text-gray-500">DILER NOMI</p>
                        <p className="text-[12px] font-[600] text-gray-500">MAS'UL SHAXS</p>
                        <p className="text-[12px] font-[600] text-gray-500">MANZIL</p>
                        <p className="text-[12px] font-[600] text-gray-500">STATUS</p>
                        <p className="text-[12px] font-[600] text-gray-500">HARAKATLAR</p>
                    </div>
                    {
                        paginatedData.length ? (
                            paginatedData.map((row) => (
                                <div key={row.id} className="grid grid-cols-6 px-4 py-3 border-t border-gray-100 items-center">
                                    <div className="cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selected.includes(row.id)}
                                            onChange={() => toggleSelect(row.id)}
                                            className="cursor-pointer"
                                        />
                                    </div>
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
                                        <img src={eyeIcon} alt="view" className="cursor-wait"/>
                                        <img src={editIcon} alt="edit" className="cursor-wait"/>
                                        <img onClick={() => deleteAccount(row.id)} src={deleteIcon} alt="delete" className="cursor-pointer"/>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center py-16">
                                <h1 className="text-[30px] text-red-400">bro bu yerda siz qidirgan inson yuq</h1>
                            </div>
                        )
                    }
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                        <p className="text-[13px] text-gray-500">
                            {data.length} tadan {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, data.length)} ko'rsatilmoqda
                        </p>
                        <Stack spacing={2}>
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={(e, page) => setCurrentPage(page)}
                                renderItem={(item) => (
                                    <PaginationItem
                                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    </>);
}