import { useState } from "react";

const AddItem = () => {

    const [product, setProduct] = useState({
        nombre: "",
        descripcion: "",
        marca: "",
        moneda: "",
        precio: null,
        imagenUrl: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setProduct({...product, [name]: value})
    }

    return (
        <div>
            <div>
                <label>Nombre del producto</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese el nombre del producto"
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
                />
            </div>
            <div>
                <label>Imagen</label>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    name="imagenUrl" 
                    id="imagenUrl" 
                    placeholder="Ingrese la url de la imagen" 
                />
            </div>
        </div>
    )
}

export default AddItem;