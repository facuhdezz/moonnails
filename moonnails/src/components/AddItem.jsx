import { useState } from "react";
import ProductsCards from "./ProductsCards";

const AddItem = () => {

    const [product, setProduct] = useState({
        nombre: "",
        descripcion: "",
        stock: null,
        marca: "",
        moneda: "",
        precio: null,
        foto: ""
    })

    const [isAdded, setIsAdded] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAdded(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del producto</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Ingrese el nombre del producto"
                        required
                    />
                </div>
                <div>
                    <label>Descripción</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        placeholder="Ingrese la descripción del producto"
                        required
                    />
                </div>
                <div>
                    <label>Marca</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="marca"
                        id="marca"
                        placeholder="Ingrese la marca del producto"
                        required
                    />
                </div>
                <div>
                    <label>Moneda</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="moneda"
                        id="moneda"
                        placeholder="Ingrese el tipo de moneda"
                        required
                    />
                </div>
                <div>
                    <label>Precio</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name="precio"
                        id="precio"
                        placeholder="Ingrese el precio del producto"
                        required
                    />
                </div>
                <div>
                    <label>Stock</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name="stock"
                        id="stock"
                        placeholder="Ingrese el stock disponible"
                        required
                    />
                </div>
                <div>
                    <label>Imagen</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="foto"
                        id="foto"
                        placeholder="Ingrese la url de la imagen"
                        required
                    />
                </div>
                <input type="submit" value="agregar" />
            </form>
            {isAdded && <ProductsCards key={product.precio} nombre={product.nombre} foto={product.foto} marca={product.marca} moneda={product.moneda} precio={product.precio} />}
        </div>
    )
}

export default AddItem;