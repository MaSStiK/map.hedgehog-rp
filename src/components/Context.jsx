import { useState, createContext } from "react";

// Создание контекста приложения
export const DataContext = createContext({})

// Устанавливаем стейты в приложении
export function DataProvider({ children }) {
    // Отображаемая карта
    const [Map, setMap] = useState({});

    return (
        <DataContext.Provider value={{ Map, setMap }}>
            {children}
        </DataContext.Provider>
    );
}