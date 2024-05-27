import Logo from '../assets/logos/logo_moonnails.png'
import Menu from '../assets/icons/menu.svg'
import Cart from '../assets/icons/cart.svg'
import Calendar from '../assets/icons/calendar.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="flex top-0 w-full h-24 px-6 bg-white items-center text-xl sticky">
            <div className="flex gap-12 justify-between items-center w-full">
                <Link to={"/"}><img src={Logo} className='h-14 cursor-pointer' /></Link>
                <div className='flex gap-6 justify-between'>
                    <img src={Cart} className='h-8 cursor-pointer' />
                    <img src={Calendar} className='h-8 cursor-pointer' />
                    <img src={Menu} className='h-8 cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;