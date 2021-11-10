import React from 'react'
import Footer from '../components/footer'

const Login = () => {
    return (
        <>
            <div className="flex">
                <div className="w-0 md:w-6/12 flex justify-center items-center px-0 md:px-10">
                    <img src="/landing1.png" alt="" />
                </div>
                <div className="w-full md:w-6/12 flex flex-col justify-center bg-base-200 h-screen px-5 md:px-10">
                    <div className="prose prose-sm lg:prose-lg mb-5">
                        <h1 className="text-center">Manage Your Book Freedomly Inside Blockchain Environment </h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="btn btn-primary btn-lg">LOGIN WITH NEAR WALLET <img src="/near.png" alt="" className="object-contain w-5 h-5 ml-2" /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
