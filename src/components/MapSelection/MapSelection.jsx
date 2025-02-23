import { useState, useContext, useEffect } from "react";
import CustomSelect from "../CustomSelect/CustomSelect"
import { DataContext } from "../Context"

const seasonOptions = [
    {value: "s4", label: "Сезон 4 (Текущий)"},
    {value: "s3", label: "Сезон 3"},
    // {value: "s2", label: "Сезон 2"},
    // {value: "s1", label: "Сезон 1"},
]

export const MapOptions = {
    s4: [
        {value: "23.02.2025", label: "23.02.2025", url: require("../../assets/maps/s4/2025.02.23.png")},
        {value: "03.01.2025_2", label: "03.01.2025_2", url: require("../../assets/maps/s4/2025.01.03_2.png")},
        {value: "03.01.2025", label: "03.01.2025", url: require("../../assets/maps/s4/2025.01.03.png")},
        {value: "02.01.2025", label: "02.01.2025", url: require("../../assets/maps/s4/2025.01.02.png")},
        {value: "29.12.2024", label: "29.12.2024", url: require("../../assets/maps/s4/2024.12.29.png")},
        {value: "21.11.2024", label: "21.11.2024", url: require("../../assets/maps/s4/2024.11.21.png")},
        {value: "22.10.2024", label: "22.10.2024", url: require("../../assets/maps/s4/2024.10.22.png")},
        {value: "28.09.2024", label: "28.09.2024", url: require("../../assets/maps/s4/2024.09.28.png")},
        {value: "15.09.2024", label: "15.09.2024", url: require("../../assets/maps/s4/2024.09.15.png")},
        {value: "24.08.2024_2", label: "24.08.2024_2", url: require("../../assets/maps/s4/2024.08.24_2.png")},
        {value: "24.08.2024", label: "24.08.2024", url: require("../../assets/maps/s4/2024.08.24.png")},
        {value: "11.08.2024", label: "11.08.2024", url: require("../../assets/maps/s4/2024.08.11.png")},
        {value: "27.07.2024", label: "27.07.2024", url: require("../../assets/maps/s4/2024.07.27.png")},
        {value: "19.07.2024", label: "19.07.2024", url: require("../../assets/maps/s4/2024.07.19.png")},
        {value: "19.06.2024", label: "19.06.2024", url: require("../../assets/maps/s4/2024.06.19.png")},
        {value: "17.06.2024", label: "17.06.2024", url: require("../../assets/maps/s4/2024.06.17.png")},
        {value: "14.06.2024", label: "14.06.2024", url: require("../../assets/maps/s4/2024.06.14.png")},
        {value: "12.06.2024", label: "12.06.2024", url: require("../../assets/maps/s4/2024.06.12.png")},
        {value: "lore-map", label: "Лорная карта", url: require("../../assets/maps/s4/lore-map.png")},
        {value: "phys_map", label: "Физическая карта", url: require("../../assets/maps/s4/physical-map.png")},
    ],

    s3: [
        {value: "phys_map", label: "Физическая карта", url: require("../../assets/maps/s3/physical-map.png")},
    ]
}

MapOptions.s4[0].label += " (Актуалка)"

export default function Selection() {
    const Context = useContext(DataContext)
    const [Season, setSeason] = useState("s4")

    // Устанавливаем значение по умолчанию
    useEffect(() => {
        Context.setMap(MapOptions.s4[0])
    }, [])

    function changeSeason(season) {
        setSeason(season) // Устанавливаем выбранный сезон
        Context.setMap(MapOptions[season][0]) // Устанавливаем первую карту сезона
    }

    function changeMap(option) {
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