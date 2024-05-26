import { Link } from "react-router-dom";
import ProductList from "../json/products.json";

const ProductDetail = () => {
    const product = ProductList[0]
    console.log(product);
 return(
    <>
        <div className="bg-white border p-4">
            <Link to={"/"}><h1>Volver</h1></Link>
        </div>
        <div className="bg-white flex-col">
            <img className="w-auto" src={`../src/assets/products/${product.foto}`} />
            <div>
                <h1 className="text-2xl">{product.nombre}</h1>
                <p className="text-gray-700">{product.descripcion}</p>
                <p><span>{product.moneda}</span>500</p>
            </div>
        </div>
    </>
 )   
}

export default ProductDetail;