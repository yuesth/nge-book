import React from 'react'

const Tabs = ({ status, onChangeStatus }) => {
    return (
        <div className=" absolute top-0 right-20 md:right-8 bg-white">
            <div className="btn-group">
                <button className={`btn sm:btn-sm md:btn-md btn-outline rounded-t-none ${status === "All" && "bg-neutral text-white hover:bg-gray-800"}`} onClick={() => { onChangeStatus("All") }}>All</button>
                <button className={`btn sm:btn-sm md:btn-md btn-outline ${status === "List" && "bg-green-700 text-white hover:bg-green-900"}`} onClick={() => { onChangeStatus("List") }}>List</button>
                <button className={`btn sm:btn-sm md:btn-md btn-outline ${status === "Read" && "bg-primary text-white hover:bg-secondary"}`} onClick={() => { onChangeStatus("Read") }}>Read</button>
                <button className={`btn sm:btn-sm md:btn-md btn-outline rounded-t-none ${status === "Finished" && "bg-red-700 text-white hover:bg-red-900"}`} onClick={() => { onChangeStatus("Finished") }}>Finished</button>
            </div>
        </div>
    )
}

export default Tabs
