import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'
import { useBookContext } from '../../provider/index'
import { Spin } from 'antd'


const Layout = ({ children, page, praloading }) => {
    const { currentUser } = useBookContext()
    return (
        <>
            <Spin tip="Loading..." spinning={praloading}>
                {currentUser && <Navbar page={page} />}
                {children}
                <Footer />
            </Spin>
        </>
    )
}

export default Layout
