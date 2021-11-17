import React from 'react'
import { HomeIconSvg, LibraryIconSvg, LogoutIconSvg } from './icons'
import { useNavigate } from "react-router-dom";
import { useBookContext } from '../provider/index'

const Navbar = ({ page }) => {
    const { wallet } = useBookContext()
    let navigate = useNavigate();
    const handleLogout = () => {
        wallet.signOut();
        window.location.replace(window.location.origin + window.location.pathname);
    }
    return (
        <div className="navbar shadow-lg bg-neutral text-neutral-content">
            <div className="flex-1 px-2 mx-2">
                <span className="text-lg font-bold">
                    ngeBook
                </span>
            </div>
            <div className="flex-none hidden px-2 mx-2 lg:flex">
                <div className="flex items-stretch">
                    <button className={`btn btn-ghost btn-sm rounded-btn ${page === "Home" && "text-blue-500"} hover:text-blue-300`} onClick={() => { navigate(`/`) }}>
                        <HomeIconSvg />
                        Home
                    </button>
                    <button className={`btn btn-ghost btn-sm rounded-btn ${page === "Library" && "text-blue-500"} hover:text-blue-300`} onClick={() => { navigate(`/library`) }}>
                        <LibraryIconSvg />
                        Library
                    </button>
                    <button className="btn btn-ghost btn-sm rounded-btn text-red-500 hover:text-red-700" onClick={handleLogout}>
                        <LogoutIconSvg />
                        Logout
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Navbar
