const H1 = ({ children }) => {
    return (
        <p className="font-bold text-xl mb-1">{children}</p>
    )
}

const Label = ({ children, color, cursor }) => {
    return (
        <p className={`${typeof(color) === "undefined" && "text-gray-400"} ${color === 'green' && "text-primary100 hover:text-primary75"} text-xs mb-0 ${cursor === 'pointer' && "cursor-pointer"}`}>{children}</p>
    )
}

export {
    H1, Label
}

