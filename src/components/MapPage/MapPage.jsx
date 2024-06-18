import { useState, useEffect } from "react"
import { setPageTitle } from "../Global"
import Controls from "../MapControls";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// https://github.com/BetterTyped/react-zoom-pan-pinch#readme

import ButtonImage from "../ButtonImage/ButtonImage"

import imgWorldMap from "../../assets/images/maps/world-map_17.06.png"

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
                            <img src={imgWorldMap} alt="map" draggable="false" />
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </article>
    )
}
