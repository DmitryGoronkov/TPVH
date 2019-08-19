import React from 'react'
import './sidebarCard.scss'
import {Link} from 'react-router-dom'
export default function SidebarCard({title, description,id}) {
    return (
        <Link to={`/op/${id}`} className="sidebarCard">
            <h2 className="sidebarCard__title">{title}</h2>
            <p className='sidebarCard__description'> {description}</p>
        </Link>
    )
}

