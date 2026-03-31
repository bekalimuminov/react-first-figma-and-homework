import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./router/index.jsx";
import './index.css'
import { store } from './store/auth.js';
import {Provider} from "react-redux";


if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
