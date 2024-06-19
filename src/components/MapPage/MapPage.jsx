import { useEffect } from "react"
import { setPageTitle } from "../Global"

import Controls from "./MapControls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// https://github.com/BetterTyped/react-zoom-pan-pinch#readme

import ActualMap from "./ActualMap";

import "./MapPage.css"
import "./MapPage-phone.css"

export default function MapPage() {
    useEffect(() => {setPageTitle("Карта")}, [])

    return (
        <article>
            <div className="fullscreen">
                <TransformWrapper>
                    <Controls />
                    <TransformComponent>
                        <div className="fullscreen__image-wrapper">
                            <img src={ActualMap} alt="map" draggable="false" />
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </article>
    )
}
