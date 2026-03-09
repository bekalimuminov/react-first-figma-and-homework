import {useState} from "react";

export default function Header() {
    const [langOpen, setLangOpen] = useState(false)

    const languages = [
        {code: "uz", label: "Oʻzbekcha", flag: "/src/assets/header-languge.svg"},
        {code: "ru", label: "Русский", flag: "/src/assets/russion-flag.png"},
        {code: "en", label: "English", flag: "/src/assets/english-flag.png"},
    ]

    const [activeLang, setActiveLang] = useState(languages[0])

    return (
        <>
            <div className="w-full bg-[#F2F4F7] border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 h-7 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            <img src="/src/assets/header-first.svg" alt="first" className="w-4 h-4"/>
                            <p>Shahar: <span className="underline underline-offset-2 font-medium cursor-pointer hover:text-blue-800 transition-colors">Toshkent</span></p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors">Topshirish punktlari</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-500 text-xs font-medium">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="cursor-pointer hover:text-blue-600 transition-colors">Savol-javoblar</p>
                        <p className="cursor-pointer hover:text-blue-600 transition-colors">Buyurtmalarim</p>
                        <div className="relative">
                            <div className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors font-medium" onClick={() => setLangOpen(!langOpen)}>
                                <img src={activeLang.flag} alt="flag" className="w-5 h-5"/>
                                {activeLang.label}
                                <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                                </svg>
                            </div>
                            {langOpen && (
                                <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-36 py-1">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.code}
                                            className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors text-sm ${activeLang.code === lang.code ? "text-blue-600 font-medium" : "text-gray-700"}`}
                                            onClick={() => {
                                                setActiveLang(lang)
                                                setLangOpen(false)}}>
                                            <img src={lang.flag} alt={lang.label} className="w-5 h-5"/>
                                            {lang.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}