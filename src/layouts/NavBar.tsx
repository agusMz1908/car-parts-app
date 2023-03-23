import React, { FC, useState } from 'react'
import logo from '../assets/images/turbina-logo.jpg'
import { BiLogOut, BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalUser from "../components/modalUser"

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <div className="fixed w-full px-16 h-24 bg-black flex justify-between items-center">
            <Link to="/">
                <img src={logo} alt="logo" className="h-14" />
            </Link>
            <div className="flex items-center">
                <input
                    type="text"
                    className="bg-red-200 h-8 rounded-l-lg z-10 pl-4 text-red-600 font-bold "
                />
                <button className="bg-red-200 h-8 px-4 rounded-r-lg hover:bg-red-300">
                    <BiSearchAlt className="text-neutral-700" />
                </button>
            </div>
            <div className="flex space-x-6 text-white font-bold">
                <button className='flex flex-row items-center space-x-4'>
                    <FiUser
                        size={40}
                        className="rounded-full p-2 bg-red-200 text-black hover:text-black hover:bg-red-600"
                        onClick={handleModal}
                    />
                    <span>Admin</span>
                </button>
                <button>
                    <BiLogOut size={35} className="hover:text-red-600" />
                </button>
            </div>
            {modal && <ModalUser closeModal={handleCloseModal} />}
        </div>
    );
}

export default NavBar