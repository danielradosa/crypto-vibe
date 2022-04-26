import { useState } from 'react';
//import { HiMenuAlt4 } from 'react-icons/hi';
//import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[1] flex-initial justify-center items-center my-6'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer' />
            </div>
        </nav>
    );
}

export default Navbar;