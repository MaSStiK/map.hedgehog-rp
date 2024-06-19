import { useState, useEffect } from "react"
import { setPageTitle } from "../Global"
import ButtonImage from "../ButtonImage/ButtonImage"

import Controls from "../MapControls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// https://github.com/BetterTyped/react-zoom-pan-pinch#readme

import GetActualMap from "./GetActualMap";

import "./MapPage.css"

export default function MapPage() {
    useEffect(() => {setPageTitle("Карта")}, [])

    return (
        <article>
            <div className="fullscreen">
                <TransformWrapper>
                    <Controls />
                    <TransformComponent>
                        <div className="fullscreen__image-wrapper">
                            <img src={GetActualMap()} alt="map" draggable="false" />
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </article>
    )
}
