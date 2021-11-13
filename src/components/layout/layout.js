import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'
import { useBookContext } from '../../provider/index'


const Layout = ({ children }) => {
    const { currentuser } = useBookContext()
    return (
        <>
            {currentuser && <Navbar />}
            {children}
            <Footer />
        </>
    )
}

export default Layout
