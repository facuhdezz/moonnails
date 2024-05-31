import { useState } from "react";
import ProductsCards from "./ProductsCards";

const AddItem = () => {

    const [product, setProduct] = useState({
        nombre: "",
        descripcion: null,
        stock: null,
        marca: "",
        moneda: "",
        precio: null,
        foto: "",
        destacado: null
    })

    const [isChecked, setIsChecked] = useState(false);

    let descripcion = []

    const [isAdded, setIsAdded] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        if (name == "descripcion") {
            descripcion = value.split("/")
            setProduct({ ...product, [name]: descripcion })
        } else {
            setProduct({ ...product, [name]: value })
        }
        console.log(product);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAdded(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="bg-white mx-4 rounded divide-y">
                    <div className="py-2 px-4 text-white bg-red-800 rounded-t">
                        <h1 className="text-lg">Agregar un producto nuevo</h1>
                    </div>
                    <div className="divide-y">
                        <div className="flex flex-col py-2 px-4 gap-1">
                            <label>Nombre del producto</label>
                            <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Ingrese el nombre del producto"
                                required
                            />
                        </div>
                        <div className="flex flex-col py-2 px-4 gap-1">
                            <label>Descripción</label>
                            <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="text"
                                name="descripcion"
                                id="descripcion"
                                placeholder="Ingrese la descripción del producto"
                                required
                            />
                        </div>
                        <div className="flex flex-col py-2 px-4 gap-1">
                            <label>Marca</label>
                            <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder="Ingrese la marca del producto"
                                required
                            />
                        </div>
                        <div className="flex py-2 px-4 gap-4 items-center">
                            <label>Moneda</label>
                            <select
                                className="cursor-pointer p-2 rounded bg-gray-100 grow"
                                onChange={handleChange}
                                name="moneda"
                                id="moneda"
                                required
                            >
                                <option autoFocus value="$">$</option>
                                <option autoFocus value="USD">USD</option>
                            </select>
                        </div>
                        <div className="flex flex-col py-2 px-4 gap-1">
                            <label>Precio</label>
                            <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="number"
                                name="precio"
                                id="precio"
                                min="0"
                                placeholder="Ingrese el precio del producto"
                                required
                            />
                        </div>
                        <div className="flex flex-col py-2 px-4 gap-1">
                            <label>Stock</label>
                            <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="number"
                                name="stock"
                                id="stock"
                                min="0"
                                placeholder="Ingrese el stock disponible"
                                required
                            />
                        </div>
                        <div className="flex flex-col py-2 px-4 gap-1">
                            <label>Imagen</label>
                            <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="text"
                                name="foto"
                                id="foto"
                                placeholder="Ingrese la url de la imagen"
                                required
                            />
                        </div>
                        <div className="flex p-4 gap-3 items-center">
                            <label>Producto Destacado</label>
                            <div className="flex gap-1">
                                <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="radio"
                                name="destacado"
                                id="destacado"
                                value={true}
                                placeholder="Ingrese la url de la imagen"
                                />
                                <label>Sí</label>
                            </div>
                            <div className="flex gap-1">
                                <input
                                className="p-2 border rounded bg-gray-100"
                                onChange={handleChange}
                                type="radio"
                                name="destacado"
                                id="destacado"
                                value={false}
                                placeholder="Ingrese la url de la imagen"
                                />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 px-2 text-center">
                        <input className="cursor-pointer bg-gray-100 w-full rounded-md py-1 hover:bg-gray-200" type="submit" value="Agregar" />
                    </div>
                </div>
            </form>
            {isAdded && <ProductsCards key={product.precio} nombre={product.nombre} foto={product.foto} marca={product.marca} moneda={product.moneda} precio={product.precio} />}
        </div>
    )
}

export default AddItem;