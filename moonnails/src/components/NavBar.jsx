import Logo from '../assets/logos/logo_moonnails.png'

const NavBar = () => {
    return (
        <nav className="flex top-0 w-full h-24 bg-white px-48 items-center text-xl justify-between">
            <div className="flex gap-12 items-center">
                <img src={Logo} className='h-16 cursor-pointer'/>
                <p className='cursor-pointer'>Agenda</p>
                <p className='cursor-pointer'>Productos</p>
                <p className='cursor-pointer'>Galería</p>
            </div>
            <div className="flex gap-12">
                <p className='cursor-pointer'>Buscar</p>
                <p className='cursor-pointer'>Carrito</p>
            </div>
        </nav>
    )
}

export default NavBar;