import Banner from "../components/Banner";
import ImagenesNails from "../components/ImagenesNails";
import ProductsContainer from "../components/ProductsContainer";

const Home = () => {
    return (
        <>
            <Banner />
            <main className="flex flex-col my-4 gap-4">
                <ProductsContainer />
                <ImagenesNails />                
            </main>
        </>
    )
}

export default Home;