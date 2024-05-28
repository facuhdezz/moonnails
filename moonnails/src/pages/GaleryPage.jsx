import Albums from "../components/Albums";
import Galeria from "../components/Galeria";
import VolverAtras from "../components/VolverAtras";
import scrollToTop from "../functions/scrollToTop";

const GaleryPage = () => {

    scrollToTop();

    return (
        <>
            <main className="flex flex-col my-4 gap-4">
                <VolverAtras />
                <Albums />
                <Galeria />               
            </main>
        </>
    )
}

export default GaleryPage;