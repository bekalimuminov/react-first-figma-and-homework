import React from 'react';
import useStore from '../store/store.js';

export default function UseStorePages() {
    const {status, setStatus , count , increment , dincrement , reset} = useStore();

    const boss = () => {
        const promt = prompt("yoshizni kiriting chuvak");

        if (promt === null) {
            return;
        }

        if (promt.trim() === "") {
            setStatus("Bo'sh qoldirmang, yoshni yozing");
            return;
        }

        const son = Number(promt);

        if (isNaN(son)) {
            setStatus("Faqat raqam kiritish mumkin, bratan");
            return;
        }

        if (son >= 15) {
            setStatus("katta bacha ekansanki 😂")
        } else if (son < 14) {
            setStatus("qumingni uyna bratishka")
        }
    }


    return (
        <>
            <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
                <div
                    className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-center">
                    <h1 className="text-3xl font-bold text-white bg-clip-text mb-8">
                        Yana keldizmi bratan😁
                    </h1>
                    <button onClick={boss}
                            className="group relative px-8 py-3 font-bold text-white transition-all duration-300 active:scale-95">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-[#1e293b] px-8 py-3 rounded-xl border border-white/20">
                            Bosing qani nma bularkan
                        </div>
                    </button>

                    {
                        status && (
                            <div className="mt-10 p-4 rounded-2xl border border-cyan-500">
                                <h2 className="text-xl text-cyan-300 font-medium">
                                    {status}
                                </h2>
                            </div>
                        )
                    }

                    <h1 className="text-xl text-gray-400 mb-2 uppercase tracking-widest">Hisoblagich</h1>



                    <div className="flex gap-4 justify-center">

                        <button className="text-[50px] border border-blue-800 rounded-full w-full" onClick={increment}>+</button>

                        <div className="text-7xl font-black text-white mb-8">
                            {count}
                        </div>

                        <button className="text-[50px] border border-blue-800 rounded-full w-full" onClick={dincrement}>-</button>
                        <button onClick={reset} className="px-6 rounded-xl bg-gray-500/20 border border-gray-500/50 text-gray-300 hover:bg-gray-500 hover:text-white transition-all active:scale-90">Reset</button>

                    </div>
                </div>
            </div>
        </>
    )
}