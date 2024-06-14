import { useState, useEffect } from "react"
import { setPageTitle } from "../Global"

import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
// https://github.com/BetterTyped/react-zoom-pan-pinch#readme

import ButtonImage from "../ButtonImage/ButtonImage"
import imgPlus from "../../assets/svg/Plus.svg"
import imgMinus from "../../assets/svg/Minus.svg"
import imgFullscreen from "../../assets/svg/Fullscreen.svg"

import imgWorldMap from "../../assets/images/world_map 14.06.png"

import "./MapPage.css"

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls()
    return (
        <div className="fullscreen__controls flex-col">
            <ButtonImage
                src={imgPlus}
                alt="zoom-in"
                onClick={() => zoomIn()}
            />
            <ButtonImage
                src={imgMinus}
                alt="zoom-out"
                onClick={() => zoomOut()}
            />
            <ButtonImage
                src={imgFullscreen}
                alt="center"
                onClick={() => resetTransform()}
            />
        </div>
    )
}

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
