import { Link } from "react-router-dom";
import ButtonProfile from "../ButtonProfile/ButtonProfile"
import MapSelection from "../MapSelection/MapSelection"
import imgLogo from "../../assets/logo/logoFullSize.png"

import "./Aside.css"
import "./Aside-phone.css"

export default function Aside() {
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