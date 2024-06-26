// Импорт основных библиотек
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { DataContext, CreateContext } from "./components/Context"
import { GSAPI } from "./components/API";
import { CONFIG, setPageLoading } from "./components/Global";
import Modal from "./components/Modal/Modal"
import $ from "jquery"

// Импорт стилей
import "./styles/style.css";
import "./App.css";
import "./App-phone.css";

// Импорт страниц
import Map from "./components/MapPage/MapPage";

import NotFound from "./components/NotFoundPage/NotFoundPage";


export default function App() {
    // Своя функция "CreateContext" которая вписывает useState в контекст
    const Context = CreateContext(useContext(DataContext)) // Помять приложения, устанавливаем при запуске

    return (
        <>
            <Modal>
                {Context.Modal}
            </Modal>

            <DataContext.Provider value={Context}>
                <Routes>
                    <Route path="/map" element={<Map />} />
                    <Route path="/" element={<Map />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </DataContext.Provider>
        </>
    )
}