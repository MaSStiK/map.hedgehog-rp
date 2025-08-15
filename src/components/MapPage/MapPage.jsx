import { useEffect, useContext } from "react"
import { DataContext } from "../Context"
import { setPageTitle } from "../Global"

import Controls from "./MapControls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// https://github.com/BetterTyped/react-zoom-pan-pinch#readme

import Aside from "../Aside/Aside";

import "./MapPage.css"
import "./MapPage-phone.css"

export default function MapPage() {
    useEffect(() => {setPageTitle("Карта")}, [])
    const Context = useContext(DataContext)

    return (
        <article>
            <Aside />

            <div className="fullscreen">
                <TransformWrapper>
                    <Controls />
                    <TransformComponent>
                        <div className="fullscreen__image-wrapper">
                            <img src={Context.Map.value} alt="map" draggable="false" />
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </article>
    )
}
