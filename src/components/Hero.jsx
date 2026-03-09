import {useState} from "react";

export default function MainHeader() {
    const [search, setSearch] = useState("")

    return (
        <>
            <div className="w-full bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center ">
                    <div className="cursor-pointer mr-[30px]">
                        <img src="/src/assets/link%20→%20SVG.svg" alt="uzum market"/>
                    </div>

                    <div className="flex items-center cursor-pointer hover:text-purple-600 transition-colors flex-shrink-0 font-medium text-gray-700">
                        <img src="/src/assets/button_margin.png" alt="catalog"/>
                    </div>

                    <div className="flex-1 flex items-center border border-gray-200 rounded-lg overflow-hidden hover:border-purple-400 transition-colors">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Mahsulotlar va turkumlar izlash"
                            className="flex-1 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder-gray-400"
                        />
                        <div>
                            <img src="/src/assets/button-search.png" alt="search"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 flex-shrink-0 ml-[24px]">
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-600 transition-colors text-sm text-gray-700">
                            <img src="/src/assets/hero-icon.svg" alt="kirish" className="w-5 h-5"/>
                            <p>Kirish</p>
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-600 transition-colors text-sm text-gray-700">
                            <img src="/src/assets/hero-saralash.svg" alt="saralangan"/>
                            <p>Saralangan</p>
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-600 transition-colors text-sm text-gray-700">
                            <img src="/src/assets/savat.svg" alt="savat"/>
                            <p>Savat</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}