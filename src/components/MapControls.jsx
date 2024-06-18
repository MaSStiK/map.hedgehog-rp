import { useControls } from "react-zoom-pan-pinch";
import imgPlus from "../assets/svg/Plus.svg"
import imgMinus from "../assets/svg/Minus.svg"
import imgFullscreen from "../assets/svg/Fullscreen.svg"
import ButtonImage from "./ButtonImage/ButtonImage"

export default function Controls() {
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