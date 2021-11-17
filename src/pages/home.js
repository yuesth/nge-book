import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/layout'
import { Modal, Empty, Select, Input, notification } from 'antd'
import Card from '../components/card'
import { H1, Label } from '../components/typography'
import { ShopIconSvg } from '../components/icons'
import { useBookContext } from '../provider'

const Home = () => {
    const { contract } = useBookContext()
    const [books, setbooks] = useState([])
    const [books2, setbooks2] = useState([])
    const [praloading, setpraloading] = useState(true)
    const [loadingmodal, setloadingmodal] = useState(false)
    const [selectedbook, setselectedbook] = useState({
        book_image: "",
        title: "",
        description: "",
        author: "",
        publisher: "",
        status: ""
    })
    const [modal, setmodal] = useState(false)

    const onSeachBook = (e) => {
        if (e.target.value === "") {
            setbooks(books2)
        }
        else {
            var datatemp = books2
            datatemp = datatemp.filter(flt => {
                return flt.title.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setbooks(datatemp)
        }
    }

    const onSelectStatus = (value) => {
        setselectedbook({ ...selectedbook, status: value })
    }

    const handleAddBook = () => {
        setloadingmodal(true)
        contract
            // .add_book(`{"book":${JSON.stringify({
            //     title: selectedbook.title,
            //     description: selectedbook.description,
            //     status: selectedbook.status,
            //     image: selectedbook.book_image
            // })}`)
            .add_book({
                book: {
                    title: selectedbook.title,
                    description: selectedbook.description,
                    status: selectedbook.status,
                    image: selectedbook.book_image
                }
            })
            .then(() => {
                setselectedbook({
                    book_image: "",
                    title: "",
                    description: "",
                    author: "",
                    publisher: "",
                    status: ""
                })
                setloadingmodal(false)
                setmodal(false)
                notification['success']({
                    message: "Book added to library!",
                    duration: 2
                })
            }
            )
            .catch((error) => {
                setselectedbook({
                    book_image: "",
                    title: "",
                    description: "",
                    author: "",
                    publisher: "",
                    status: ""
                })
                setloadingmodal(false)
                setmodal(false)
                notification['error']({
                    message: "Failed added Book to library!",
                    duration: 2
                })
            });
    }

    useEffect(() => {
        setpraloading(true)
        fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=SbTbZ6EQbYAnXInQb0tJbxPXCZTApz2t`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res2 => {
                var newBooks = []
                var count = 1
                res2.results.lists.map((doc, idx) => {
                    doc.books.forEach((doc2) => {
                        newBooks.push({
                            ...doc2,
                            id: count
                        })
                        count += 1
                    })
                    count += 1
                })
                setbooks(newBooks)
                setbooks2(newBooks)
                setpraloading(false)
            })
    }, [])
    return (
        <Layout page={"Home"} praloading={praloading}>
            <div className="flex flex-col px-2 md:px-5 py-2 md:py-5">
                <div className="flex flex-col items-center mb-2 md:mb-5">
                    <h1 className=" text-xl md:text-4xl font-bold mb-2">Best Seller Books</h1>
                </div>
                <div className="flex flex-col items-center mb-2 md:mb-5">
                    <Input placeholder="Search book title" style={{ width: `70%` }} onChange={onSeachBook} allowClear></Input>
                </div>
                {
                    <>
                        {
                            books.length < 1 ?
                                <>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                                </>
                                :
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
                                    {
                                        books.map((doc, idx) => {
                                            return (
                                                <Card book={doc} setmodal={setmodal} setselectedbook={setselectedbook}></Card>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </>
                }
            </div>
            <Modal title={<H1>Book Detail</H1>}
                visible={modal}
                onCancel={() => {
                    setmodal(false);
                    setselectedbook({
                        book_image: "",
                        title: "",
                        description: "",
                        author: "",
                        publisher: "",
                        status: ""
                    })
                }}
                okText="Save"
                cancelText="Cancel"
                onOk={handleAddBook}
                okButtonProps={{ loading: loadingmodal }}
                width={720}
            >
                <div className="flex flex-col mb-5 px-5">
                    <div className="max-h-96 w-full mb-5 flex justify-center">
                        <img src={selectedbook.book_image} alt="" className="object-fit max-h-96 rounded" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <Label>Title</Label>
                        <p className="mb-0">{selectedbook.title ?? "-"}</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        <Label>Description</Label>
                        <p className="mb-0">{selectedbook.description ?? "-"}</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        <Label>Contributor</Label>
                        <p className="mb-0">{selectedbook.author ?? "-"}</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        <Label>Publisher</Label>
                        <p className="mb-0">{selectedbook.publisher ?? "-"}</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        <Label>Link</Label>
                        <div className="flex items-center">
                            <div className="mr-1">
                                <ShopIconSvg />
                            </div>
                            <a href={`${selectedbook.amazon_product_url}`} target="_blank" rel="noreferrer" className="text-primary100 hover:text-primary75">{selectedbook.amazon_product_url}</a>
                        </div>
                    </div>
                    <div className="flex mb-5 w-full">
                        <Select style={{ width: `60%` }} value={selectedbook.status === "" ? null : selectedbook.status} placeholder="Choose step" onChange={onSelectStatus}>
                            <Select.Option value={"List"}>
                                <p className="text-green-600">Reading List</p>
                            </Select.Option>
                            <Select.Option value={"Read"}>
                                <p className="text-blue-600">Read</p>
                            </Select.Option>
                            <Select.Option value={"Finished"}>
                                <p className="text-red-600">Finished</p>
                            </Select.Option>
                        </Select>
                    </div>
                </div>
            </Modal>
        </Layout>
    )
}

export default Home
