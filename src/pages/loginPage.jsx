import { useDispatch } from 'react-redux';
import { login } from '../store/auth.js';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


export default function LoginPage() {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogin() {
        if (email === 'user' && password === 'login') {
            dispatch(login({email , password}));
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/');
        }else if (email === 'umid' && password === 'umidSamadov') {
            dispatch(login({email , password}));
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/');
        }else if(email === 'Bekali' && password === 'admin') {
            dispatch(login({email , password , isAdmin: 'admin'}));
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/profile');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Kirish</h1>

                <div className="mb-4">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Login" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                </div>

                <div className="mb-6">
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Parol" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                </div>

                <button onClick={handleLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-all active:scale-95">
                    Kirish
                </button>
            </div>
        </div>
    );

}