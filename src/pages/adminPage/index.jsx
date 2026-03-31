import React from 'react';
import { profileData, reja } from "/src/allMocks/mock.jsx";
import Sidebar2 from "../../components/sidebar2.jsx";
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const { email } = useSelector((state) => state.auth);
    return (
        <div className="flex h-screen w-screen dark:bg-[#13131F]">
            <Sidebar2 />
            <div className="flex-1 bg-[#F3F4F6] dark:bg-[#13131F] overflow-y-auto p-6">

                <div className="bg-white dark:bg-[#1E1E2E] rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <img src={profileData.avatar} alt="avatar" className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"/>
                        <div>
                            <h1 className="text-xl font-bold dark:text-white">{email}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Diller ID: {profileData.id}</p>
                            <span className="inline-flex items-center gap-1 mt-1 text-sm text-green-500 font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                                {profileData.status}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            Profilni tahrirlash
                        </button>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition">
                            Ma'lumotlarni eks...
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#1E1E2E] rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-4">
                    <h2 className="text-lg font-semibold dark:text-white mb-5">Shaxsiy ma'lumotlar</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { label: "To'liq ismi sharifi", value: email },
                            { label: "Telefon raqami", value: profileData.phone },
                            { label: "Email", value: profileData.email },
                            { label: "Manzil", value: profileData.address },
                            { label: "Yuridik shaxs", value: profileData.company },
                            { label: "Mas'ul menejer", value: profileData.manager },
                        ].map((item, i) => (
                            <div key={i}>
                                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-[#1E1E2E] rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-lg font-semibold dark:text-white mb-5">Reja vs Amalga oshirilgan natija (Oylik)</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {reja.map((stat, id) => (
                            <div key={id} className="bg-[#F3F4F6] dark:bg-[#13131F] rounded-xl p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                                    <img src={stat.icon} alt="img"/>
                                </div>
                                <p className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {stat.current.toLocaleString()} / {stat.total.toLocaleString()} {stat.unit}
                                </p>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                                    <div
                                        className={`h-1.5 rounded-full ${stat.color}`}
                                        style={{ width: `${stat.percent}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs font-medium text-right">
                                    {stat.percent}% Bajarildi
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}