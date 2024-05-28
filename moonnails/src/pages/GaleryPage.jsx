import Albums from "../components/Albums";
import Galery from "../components/Galery";
import Return from "../components/Return";
import scrollToTop from "../functions/scrollToTop";

const GaleryPage = () => {

    scrollToTop();

    return (
        <>
            <main className="flex flex-col my-4 gap-4">
                <Return />
                <Albums />
                <Galery />               
            </main>
        </>
    )
}

export default GaleryPage;