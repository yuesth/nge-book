import React from 'react'
import Layout from '../components/layout/layout'

const Login = () => {
    return (
        <Layout>
            <div className="flex">
                <div className="w-0 md:w-6/12 flex justify-center items-center px-0 md:px-10">
                    <img src="/landing1.png" alt="" />
                </div>
                <div className="w-full md:w-6/12 flex flex-col justify-center h-screen px-5 md:px-10">
                    <div className="prose prose-sm lg:prose-lg mb-8">
                        <h1 className="text-center">NgeBook</h1>
                    </div>
                    <div className="font-light text-xl mb-8">
                        <h1 className="text-center">
                            Manage Your Book Freedomly Inside Blockchain Environment
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="btn btn-primary btn-lg">LOGIN WITH NEAR WALLET <img src="/near.png" alt="" className="object-contain w-5 h-5 ml-2" /></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login
