import { useEffect } from "react"
import { Link } from "react-router-dom"
import { setPageTitle } from "../Global"

import "./NotFoundPage.css"

export default function NotFoundPage() {
    useEffect(() => {setPageTitle("Ошибка")}, [])

    return (
        <article>
            <section className="flex-col section-notFound">
                <h2>Страница не найдена!</h2>
                <Link to={"/"}>
                    <button>На главную</button>
                </Link>
            </section>
        </article>
    )
}
