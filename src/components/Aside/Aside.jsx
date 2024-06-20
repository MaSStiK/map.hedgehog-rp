import { useEffect } from "react";
import ButtonProfile from "../ButtonProfile/ButtonProfile"
import ButtonImage from "../ButtonImage/ButtonImage"
import Selection from "./Selection"
import imgLogo from "../../assets/logo/logoFullSize.png"

import "./Aside.css"
import "./Aside-phone.css"

export default function Aside() {
    return (
        <aside className="flex-col">
            <ButtonProfile
                src={imgLogo}
                text={"Основной сайт"}
            />
            
            <Selection />
        </aside>
    )
}