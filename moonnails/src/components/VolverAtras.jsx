import { Link } from "react-router-dom"
import Arrow from "../assets/icons/arrow.svg"

const VolverAtras = () => {
    return (
        <div className="bg-white rounded border p-4 mx-4">
            <Link to={"/"}><div className="flex gap-2 hover:gap-3 duration-300"><img className="rotate-180" src={Arrow} /><h1 className="text-lg">Volver</h1></div></Link>
        </div>
    )
}

export default VolverAtras;