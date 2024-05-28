import Banner from "../components/Banner";
import Wpp from "../assets/icons/wpp.png";
import ImgNails from "../components/ImgNails";
import ProductsContainer from "../components/ProductsContainer";
import scrollToTop from "../functions/scrollToTop";

const Home = () => {

    scrollToTop();

    return (
        <>
            <Banner />
            <main className="flex flex-col my-4 gap-4">
                <ProductsContainer />
                <ImgNails />                
            </main>
            <a href="https://wa.me/59892300884" target="_blank" rel="noopener noreferrer" className="wppbtn">
                <img src={Wpp} className="w-16"/>
            </a>
        </>
    )
}

export default Home;