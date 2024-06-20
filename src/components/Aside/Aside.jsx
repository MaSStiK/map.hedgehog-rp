import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonProfile from "../ButtonProfile/ButtonProfile"
import ButtonImage from "../ButtonImage/ButtonImage"
import Selection from "./Selection"
import imgLogo from "../../assets/logo/logoFullSize.png"

import "./Aside.css"
import "./Aside-phone.css"

export default function Aside() {
    const Navigate = useNavigate()

    return (
        <aside className="flex-col">
            <ButtonProfile
                src={imgLogo}
                text={"Основной сайт"}
                onClick={() => window.open("https://hedgehog-rp.ru", "_self")}
            />

            <Selection />
        </aside>
    )
}