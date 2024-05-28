import ProductDetail from "../components/ProductDetail";
import ProductsContainer from "../components/ProductsContainer";
import Return from "../components/Return"
import scrollToTop from "../functions/scrollToTop";

const ProductDetailPage = () => {

    scrollToTop();

    return (
        <main className="flex flex-col gap-4 my-4">
            <Return />
            <ProductDetail />
            <ProductsContainer />
        </main>
    )
}

export default ProductDetailPage;