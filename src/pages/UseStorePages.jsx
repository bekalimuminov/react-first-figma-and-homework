import React from 'react';
import useStore from '../store/store.js';

export default function UseStorePages() {
    const {status, setStatus} = useStore();

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
                        Topib keldizmi bratan😁
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

                    <div
                        className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 -z-10"></div>
                    <div
                        className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-400 rounded-full blur-[80px] opacity-20 -z-10"></div>
                </div>
            </div>
        </>
    )
}