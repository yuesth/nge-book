import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/layout'
import { Modal, Empty, Select, Input, notification, Button } from 'antd'
import Card from '../components/card'
import { H1, Label } from '../components/typography'
import { ShopIconSvg, TrashIconSvg } from '../components/icons'
import Tabs from '../components/tabs'
import { useBookContext } from '../provider'
import { useNavigate } from 'react-router'
import Sticky from 'wil-react-sticky'

const Library = () => {
    const { contract, currentUser } = useBookContext()
    const navigate = useNavigate()
    const [books, setbooks] = useState([])
    const [books2, setbooks2] = useState([])
    const [praloading, setpraloading] = useState(true)
    const [loadingmodal, setloadingmodal] = useState(false)
    const [selectedbook, setselectedbook] = useState({
        book_id: null,
        book_image: "",
        title: "",
        description: "",
        author: "",
        publisher: "",
        status: ""
    })
    const [modal, setmodal] = useState(false)
    const [skip, setskip] = useState(0);
    const [limit, setlimit] = useState(10);
    const [status, setstatus] = useState("All")
    const [modaldelete, setmodaldelete] = useState(false)
    const [loadingmodaldelete, setloadingmodaldelete] = useState(false)

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

    const onChangeStatus = (currentStatus) => {
        setstatus(currentStatus)
        if (currentStatus === "All") {
            setbooks(books2)
        }
        else {
            var temp = books2.filter((docfil, idxfil) => {
                return docfil.status === currentStatus
            })
            setbooks(temp)
        }
    }

    const handleUpdateBook = () => {
        setloadingmodal(true)
        contract
            .update_book({
                book_id: selectedbook.book_id,
                status: selectedbook.status
            })
            .then(() => {
                setloadingmodal(false)
                setmodal(false)
                notification['success']({
                    message: "Book updated!",
                    duration: 2
                })
                window.location.href = `/library`
            }
            )
            .catch((error) => {
                setloadingmodal(false)
                setmodal(false)
                notification['error']({
                    message: "Failed update book!",
                    duration: 2
                })
            });
    }

    const handleDeleteBook = () => {
        setloadingmodaldelete(true)
        contract
            .delete_book({
                book_id: selectedbook.book_id,
            })
            .then(() => {
                setloadingmodaldelete(false)
                setmodaldelete(false)
                notification['success']({
                    message: "Book deleted!",
                    duration: 2
                })
                window.location.href = `/library`
            }
            )
            .catch((error) => {
                setloadingmodaldelete(false)
                setmodaldelete(false)
                notification['error']({
                    message: "Failed delete book!",
                    duration: 2
                })
            });
    }

    useEffect(() => {
        setpraloading(true)
        contract.get_books({
            account_id: currentUser.account_id,
            skip,
            limit
        })
            .then((res) => {
                const resmap = res.map(doc => ({
                    ...doc,
                    book_image: doc.image
                }))
                setbooks([...books, ...resmap]);
                setbooks2([...books, ...resmap]);
                setpraloading(false)
            })
    }, [skip, limit])
    return (
        <Layout page={"Library"} praloading={praloading}>
            <div className="flex flex-col px-2 md:px-5 py-2 md:py-5 relative" id="wrapper">
                <Sticky containerSelectorFocus="#wrapper">
                    <Tabs status={status} onChangeStatus={onChangeStatus}></Tabs>
                </Sticky>
                <div className="flex flex-col items-center mb-2 md:mb-5 mt-10 md:mt-0">
                    <h1 className=" text-xl md:text-4xl font-bold mb-2">Your Daily Books</h1>
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
                onOk={handleUpdateBook}
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
                            <a href={`${selectedbook.amazon_product_url}`} target="_blank" className="text-primary100 hover:text-primary75">{selectedbook.amazon_product_url}</a>
                        </div>
                    </div>
                    <div className="flex flex-col mb-5 w-full">
                        <Label>Status</Label>
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
                    <div className="flex justify-end items-center">
                        <Button type="danger" onClick={() => { setmodal(false); setmodaldelete(true) }}>
                            <TrashIconSvg />
                            Delete Book from library
                        </Button>
                    </div>
                </div>
            </Modal>
            <Modal title="Delete Confirmation" visible={modaldelete} okButtonProps={{ loading: loadingmodaldelete }} onOk={handleDeleteBook} onCancel={() => { setmodaldelete(false) }}>
                Are you sure want to  delete this book from the library?
            </Modal>
        </Layout>
    )
}

export default Library
