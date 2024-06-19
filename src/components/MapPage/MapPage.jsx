import { useState, useEffect } from "react"
import { setPageTitle } from "../Global"
import ButtonImage from "../ButtonImage/ButtonImage"

import Controls from "./MapControls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// https://github.com/BetterTyped/react-zoom-pan-pinch#readme

import Aside from "../Aside/Aside";
import ActualMap from "./ActualMap";

import "./MapPage.css"
import "./MapPage-phone.css"

export default function MapPage() {
    useEffect(() => {setPageTitle("Карта")}, [])

    return (
        <article>
            {/* <Aside /> */}

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
