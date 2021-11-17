import React from 'react'

const Tabs = ({ status, onChangeStatus }) => {
    return (
        <div className=" absolute top-0 right-20 md:right-8 bg-white">
            <div className="btn-group">
                <button className={`btn sm:btn-sm md:btn-md btn-outline rounded-t-none ${status === "All" && "bg-neutral text-white hover:bg-gray-400"}`} onClick={() => { onChangeStatus("All") }}>All</button>
                <button className={`btn sm:btn-sm md:btn-md btn-outline ${status === "List" && "bg-green-200 text-green-700 hover:bg-green-400"}`} onClick={() => { onChangeStatus("List") }}>List</button>
                <button className={`btn sm:btn-sm md:btn-md btn-outline ${status === "Read" && "bg-blue-200 text-blue-700 hover:bg-blue-400"}`} onClick={() => { onChangeStatus("Read") }}>Read</button>
                <button className={`btn sm:btn-sm md:btn-md btn-outline rounded-t-none ${status === "Finished" && "bg-red-200 text-red-700 hover:bg-red-400"}`} onClick={() => { onChangeStatus("Finished") }}>Finished</button>
            </div>
        </div>
    )
}

export default Tabs
