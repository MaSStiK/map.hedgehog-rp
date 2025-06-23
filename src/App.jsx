// Импорт основных библиотек
import { Routes, Route } from "react-router-dom";

// Импорт стилей
import "./styles/style.css";
import "./App.css";
import "./App-phone.css";

// Импорт страниц
import Map from "./components/MapPage/MapPage";
import NotFound from "./components/NotFoundPage/NotFoundPage";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Map />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}