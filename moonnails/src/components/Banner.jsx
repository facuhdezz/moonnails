import { useEffect } from 'react';
import BannerImg from '../assets/banners/1.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return(
        <>
            <img className='w-auto' src={BannerImg} />
            <Link to={"/galeria"}><div className='bg-white p-4 text-center cursor-pointer'>
                <h2 className='text-xl hover:tracking-wider duration-200'>Galería de imágenes</h2>
            </div></Link>
            <div className='bg-orange-100 p-4 text-center cursor-pointer'>
                <h2 className='text-xl hover:tracking-wider duration-200'>Reservá un turno</h2>
            </div>
        </>
    )
}

export default Banner;