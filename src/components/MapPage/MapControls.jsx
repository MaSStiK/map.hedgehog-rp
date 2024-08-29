import { useContext } from "react";
import { DataContext } from "../Context"
import { useControls } from "react-zoom-pan-pinch";
import imgPlus from "../../assets/svg/Plus.svg"
import imgMinus from "../../assets/svg/Minus.svg"
import imgFullscreen from "../../assets/svg/Fullscreen.svg"
import imgLoad from "../../assets/svg/Load.svg"
import ButtonImage from "../ButtonImage/ButtonImage"

export default function Controls() {
    const Context = useContext(DataContext)
    const { zoomIn, zoomOut, resetTransform } = useControls()
    return (
        <div className="fullscreen__controls flex-col">
            <ButtonImage
                src={imgPlus}
                alt="zoom-in"
                title="Приблизить карту"
                onClick={() => zoomIn()}
            />
            <ButtonImage
                src={imgMinus}
                alt="zoom-out"
                title="Отдалить карту"
                onClick={() => zoomOut()}
            />
            <ButtonImage
                src={imgFullscreen}
                alt="center"
                title="Центрировать карту"
                onClick={() => resetTransform()}
            />
            <ButtonImage
                src={imgLoad}
                alt="load"
                title="Скачать карту"
                onClick={() => downloadImage(Context.Map)}
            />
        </div>
    )
}

// Функция скачивания картинки
function downloadImage(event) {
    const element = document.createElement("a")
    element.href = event.url
    event.label = event.label.replace(" (Актуалка)", "")
    element.download = `${event.label}.png`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}