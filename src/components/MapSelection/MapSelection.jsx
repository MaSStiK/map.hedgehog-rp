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
        {value: "24.08.2024", label: "24.08.2024", url: require("../../assets/maps/s4/24.08.2024.png")},
        {value: "11.08.2024", label: "11.08.2024", url: require("../../assets/maps/s4/11.08.2024.png")},
        {value: "27.07.2024", label: "27.07.2024", url: require("../../assets/maps/s4/27.07.2024.png")},
        {value: "19.07.2024", label: "19.07.2024", url: require("../../assets/maps/s4/19.07.2024.png")},
        {value: "19.06.2024", label: "19.06.2024", url: require("../../assets/maps/s4/19.06.2024.png")},
        {value: "17.06.2024", label: "17.06.2024", url: require("../../assets/maps/s4/17.06.2024.png")},
        {value: "14.06.2024", label: "14.06.2024", url: require("../../assets/maps/s4/14.06.2024.png")},
        {value: "12.06.2024", label: "12.06.2024", url: require("../../assets/maps/s4/12.06.2024.png")},
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