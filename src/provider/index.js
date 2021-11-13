import React, { useContext, createContext } from 'react'

const BookContext = createContext()

export function useBookContext() {
    return useContext(BookContext)
}
export function BookContextProvider({ children, value }) {
    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    )
}

