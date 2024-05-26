import BannerImg from '../assets/banners/banner_moonnails.jpg'
import Img1 from '../../ignorar/Photos/galeria/0AB32869-3474-49D2-ACBB-F71E53C2B4E6.jpg'

const Banner = () => {
    console.log(Img1);
    return(
        <>
            <img className='w-auto' src={Img1} />
            <div className='bg-white p-4 text-center cursor-pointer'>
                <h2 className='text-xl hover:tracking-wider duration-200'>Galería de imágenes</h2>
            </div>
            <div className='bg-orange-100 p-4 text-center cursor-pointer'>
                <h2 className='text-xl hover:tracking-wider duration-200'>Reservá un turno</h2>
            </div>
        </>
    )
}

export default Banner;