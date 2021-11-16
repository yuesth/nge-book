import Icon from '@ant-design/icons'

const HomeIconSvg = () => {
    const homeIconSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <rect x={10} y={12} width={4} height={4} />
        </svg>
    )
    return (
        <Icon component={homeIconSvg}></Icon>
    )
}

const LibraryIconSvg = () => {
    const libraryIconSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <line x1={3} y1={6} x2={3} y2={19} />
            <line x1={12} y1={6} x2={12} y2={19} />
            <line x1={21} y1={6} x2={21} y2={19} />
        </svg>
    )
    return (
        <Icon component={libraryIconSvg}></Icon>
    )
}

const LogoutIconSvg = () => {
    const logoutIconSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
    )
    return (
        <Icon component={logoutIconSvg}></Icon>
    )
}

const LinkIconSvg = () => {
    const linkIconSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
        </svg>
    )
    return (
        <Icon component={linkIconSvg}></Icon>
    )
}

const ShopIconSvg = () => {
    const shopIconSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={3} y1={21} x2={21} y2={21} />
            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
            <line x1={5} y1={21} x2={5} y2="10.85" />
            <line x1={19} y1={21} x2={19} y2="10.85" />
            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        </svg>
    )
    return (
        <Icon component={shopIconSvg}></Icon>
    )
}

const TrashIconSvg = () => {
    const trashIconSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke={`#ffffff`} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={4} y1={7} x2={20} y2={7} />
            <line x1={10} y1={11} x2={10} y2={17} />
            <line x1={14} y1={11} x2={14} y2={17} />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
    )
    return (
        <Icon component={trashIconSvg}></Icon>
    )
}


export {
    HomeIconSvg, LibraryIconSvg, LogoutIconSvg, LinkIconSvg, ShopIconSvg, TrashIconSvg
}