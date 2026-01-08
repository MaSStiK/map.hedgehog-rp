import { useState, useContext, useEffect } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { DataContext } from "../Context";

import s6 from "../Maps/s6";
import s5 from "../Maps/s5";
import s4 from "../Maps/s4";
import s3 from "../Maps/s3";
import s2 from "../Maps/s2";
import s1 from "../Maps/s1";

const seasonOptions = [
    {value: "s6", label: "Сезон 6"},
    {value: "s5", label: "Сезон 5"},
    {value: "s4", label: "Сезон 4"},
    {value: "s3", label: "Сезон 3"},
    {value: "s2", label: "Сезон 2"},
    {value: "s1", label: "Сезон 1"}
]

export const MapOptions = { s6, s5, s4, s3, s2, s1 }

// Текущий сезон
const currentSeason = Object.keys(MapOptions)[0]
MapOptions[currentSeason][0].label += " (Актуалка)"
seasonOptions[0].label += " (Текущий)" 

export default function Selection() {
    const { Map, setMap } = useContext(DataContext)
    const [Season, setSeason] = useState(currentSeason)

    // Устанавливаем значение по умолчанию
    useEffect(() => {
        setMap(MapOptions[currentSeason][0])
    }, [setMap])

    function changeSeason(season) {
        setSeason(season) // Устанавливаем выбранный сезон
        setMap(MapOptions[season][0]) // Устанавливаем первую карту выбранного сезона
    }

    function changeMap(option) { // Меняем карту при выборе
        setMap(option)
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
                    MapOptions[Season].findIndex(option => option.value === Map.value) >= 0
                    ? MapOptions[Season].findIndex(option => option.value === Map.value)
                    : 0
                ]} // Значение по умолчанию
                onChange={value => changeMap(value[0])}
            />
        </>
    )
}