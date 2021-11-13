import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/layout'
import { Spin, Modal, Empty } from 'antd'
import Card from '../components/card'

const Home = () => {
    const [rawdata, setrawdata] = useState({
        status: "",
        copyright: "",
        num_results: null,
        results: []
    })
    const [books, setbooks] = useState([])
    const [praloading, setpraloading] = useState(true)

    useEffect(() => {
        setpraloading(true)
        fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.REACT_APP_NYT_KEY}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res2 => {
                setrawdata(res2)
                var newBooks = []
                res2.results.lists.map((doc, idx) => {
                    doc.books.forEach(doc2 => newBooks.push(doc2))
                })
                setbooks(newBooks)
                setpraloading(false)
            })
    }, [])
    return (
        <Layout>
            <div className="flex flex-col mx-2 md:mx-5 my-2 md:my-5">
                <div className="flex flex-col items-center mb-2 md:mb-5">
                    <h1 className=" text-xl md:text-4xl font-bold mb-2">Best Seller Books</h1>
                </div>
                {
                    praloading ?
                        <>
                            <Spin size="large" style={{ marginTop: `1.5rem`, marginBottom: `1.5rem` }} />
                        </>
                        :
                        <>
                            {
                                books.length < 1 ?
                                    <>
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                                    </>
                                    :
                                    <div className="grid grid-cols-2 md:grid-cols-3 px-5">
                                        {
                                            books.map((doc, idx) => {
                                                return (
                                                    <Card book={doc}></Card>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </>
                }
            </div>
        </Layout>
    )
}

export default Home
