import { useState, useContext, useEffect } from "react";
import CustomSelect from "../CustomSelect/CustomSelect"
import { DataContext } from "../Context"

import s5 from "./s5";
import s4 from "./s4";
import s3 from "./s3";
import s2 from "./s2";
import s1 from "./s1";

const seasonOptions = [
    {value: "s5", label: "Сезон 5"},
    {value: "s4", label: "Сезон 4"},
    {value: "s3", label: "Сезон 3"},
    {value: "s2", label: "Сезон 2"},
    {value: "s1", label: "Сезон 1"},
]

export const MapOptions = { s5, s4, s3, s2, s1 }
console.log(s5.length);
console.log(s4.length);
console.log(s3.length);
console.log(s2.length);
console.log(s1.length);


// Текущий сезон
const currentSeason = Object.keys(MapOptions)[0]
MapOptions[currentSeason][0].label += " (Актуалка)"
seasonOptions[0].label += " (Текущий)" 

export default function Selection() {
    const Context = useContext(DataContext)
    const [Season, setSeason] = useState(currentSeason)

    // Устанавливаем значение по умолчанию
    useEffect(() => {
        Context.setMap(MapOptions[currentSeason][0])
    }, [])

    function changeSeason(season) {
        setSeason(season) // Устанавливаем выбранный сезон
        Context.setMap(MapOptions[season][0]) // Устанавливаем первую карту выбранного сезона
    }

    function changeMap(option) { // Меняем карту при выборе
        Context.setMap(option)
    }

    return(
        <>
            <CustomSelect
                options={seasonOptions}
                values={seasonOptions[
                    seasonOptions.findIndex(option => option.value === Season) >= 0
                    ? seasonOptions.findIndex(option => option.value === Season)
                    : 0
                ]} // Значение по умолчанию
                onChange={value => changeSeason(value[0].value)}
            />

            <CustomSelect
                options={MapOptions[Season]}
                values={MapOptions[Season][
                    MapOptions[Season].findIndex(option => option.value === Context.Map.value) >= 0
                    ? MapOptions[Season].findIndex(option => option.value === Context.Map.value)
                    : 0
                ]} // Значение по умолчанию
                onChange={value => changeMap(value[0])}
            />
        </>
    )
}