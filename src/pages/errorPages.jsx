import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">

            <h1 className="text-[#c0392b] font-extrabold text-[120px] md:text-[180px] italic leading-none">
                404
            </h1>

            <p className="text-white font-bold text-xl md:text-2xl tracking-widest">
                SAHIFA TOPILMADI
            </p>

            <p className="text-gray-500 text-sm tracking-widest text-center px-6">
                Siz izlagan sahifa mavjud emas yoki o'chirilgan
            </p>
            <Link className="mt-4 px-8 py-3 border-2 border-[#c0392b] text-[#c0392b] font-bold tracking-widest hover:bg-[#c0392b] hover:text-white transition duration-300 rounded-lg cursor-pointer" to="/">Bosh sahifaga qaytish</Link>
        </div>
    )
}