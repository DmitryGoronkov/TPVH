import React from 'react'
import './sidebarCard.scss'
import {Link} from 'react-router-dom'
export default function SidebarCard({role, keywords,id}) {
    return (
        <Link to={`/op/${id}`} className="sidebarCard">
            <h2 className="sidebarCard__title">{role}</h2>
            <p className='sidebarCard__description'> {keywords}</p>
        </Link>
    )
}

