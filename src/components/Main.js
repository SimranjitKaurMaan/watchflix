import { Banner } from "./home/Banner"
import { Categories } from "./home/Categories"

export const Main = () => {
    return <>
    <main>
        <div className="main-container flex-col-wrap-center">
            <Banner/>
            <Categories/>
        </div>
    </main></>
}