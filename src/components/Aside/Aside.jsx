import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonProfile from "../ButtonProfile/ButtonProfile"
import ButtonImage from "../ButtonImage/ButtonImage"
import MapSelection from "../MapSelection/MapSelection"
import imgLogo from "../../assets/logo/logoFullSize.png"

import "./Aside.css"
import "./Aside-phone.css"

export default function Aside() {
    const Navigate = useNavigate()

    return (
        <aside className="flex-col">
            <Link to="https://hedgehog-rp.ru">
                <ButtonProfile
                    src={imgLogo}
                    text={"Основной сайт"}
                />
            </Link>

            <MapSelection />
        </aside>
    )
}