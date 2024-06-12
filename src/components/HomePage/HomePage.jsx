import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { setPageTitle } from "../Global"

import "./HomePage.css"

export default function HomePage() {
    useEffect(() => {setPageTitle("Главная")}, [])
    let Navigate = useNavigate()

    useEffect(() => {
        Navigate("/map")
    }, [])

    return (
        <article>
            {/* <h4 className="page-title">h/home</h4> */}

            <section>
                <h2>Главная</h2>
            </section>
        </article>
    )
}
