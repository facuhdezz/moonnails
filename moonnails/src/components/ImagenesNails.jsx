import Photos from "../json/photos.json";
import Arrow from "../assets/icons/arrow.svg"
import { Link } from "react-router-dom";

const ImagenesNails = () => {
    return (
        <div className="bg-white mx-4 rounded">
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Imágenes</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {Photos.map(photo => (
                    <div className="overflow-hidden border border-white"><img className="cursor-pointer hover:scale-105 duration-300" src={photo.url} /></div>
                ))}
            </div>
            <div className="py-2 px-4">
            <Link to={"/galeria"}><div className="flex gap-2 hover:gap-3 duration-300"><h1 className="text-lg">Ver más</h1><img src={Arrow} /></div></Link>
            </div>
        </div>
    )
}

export default ImagenesNails