import { useEffect } from "react"
import { setPageTitle } from "../Global"
import { MapInteractionCSS } from "react-map-interaction";
import imgWorldMap from "../../assets/images/world_map.png"

import "./MapPage.css"

export default function MapPage() {
    useEffect(() => {setPageTitle("Карта")}, [])

    return (
        <article>
            <div className="map">
                <MapInteractionCSS
                    defaultValue={{
                        scale: 1,
                        translation: {
                            x: 0,
                            y: 0
                        }
                    }}
                    minScale={0.5}
                    maxScale={5}
                    showControls={true}
                >
                    <div className="map-wrapper">
                        <img src={imgWorldMap} alt="fullscreen" draggable="false" />
                    </div>
                </MapInteractionCSS>
            </div>
        </article>
    )
}
