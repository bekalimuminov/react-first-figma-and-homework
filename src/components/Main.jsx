import {useState} from "react";
import {products} from "../allMocks/mock.jsx";

export default function Main() {
    const [visibleCount, setVisibleCount] = useState(20)

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 5)
    }

    const handleShowLess = () => {
        setVisibleCount((prev) => prev - 5)
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Arzon narxlar</h2>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </div>

                <div className="grid grid-cols-5 gap-3">
                    {products.slice(10, visibleCount).map((product) => (
                        <div key={product.id} className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer relative">
                            <div>
                                <img src={product.image} alt={product.name} className="w-full"/>
                            </div>
                            <div className="p-3">
                                {product.monthly && (
                                    <p className="text-xs font-semibold text-yellow-500 mb-1">{product.monthly} som/oyiga</p>
                                )}
                                <p className="text-xs text-gray-700 leading-snug line-clamp-2 mb-2">{product.name}</p>
                                {product.rating && (
                                    <div className="flex items-center gap-1 mb-2">
                                        <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                        <span className="text-xs text-gray-500">{product.rating} ({product.reviews} sharh)</span>
                                    </div>
                                )}
                                {product.oldPrice && (
                                    <p className="text-xs text-gray-400 line-through">{product.oldPrice} so'm</p>
                                )}
                                <div className="flex items-center justify-between mt-0.5">
                                    <p className="text-sm font-bold text-gray-900">{product.price} so'm</p>
                                    <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-purple-100 transition-colors">
                                        <svg className="w-4 h-4 text-gray-500 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-6">
                    {visibleCount > 20 ? (
                        <button
                            onClick={handleShowLess}
                            className="w-full max-w-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-sm font-medium py-3 rounded-xl"
                        >
                            Kamroq ko'rsatish -5
                        </button>
                    ) : null}
                    {visibleCount < products.length ? (
                        <button
                            onClick={handleShowMore}
                            className="w-full max-w-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-sm font-medium py-3 rounded-xl"
                        >
                            Yana ko'rsatish {Math.min(5, products.length - visibleCount)}
                        </button>
                    ) : null}
                </div>

            </div>
        </>
    )
}