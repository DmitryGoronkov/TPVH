import React,{Component} from 'react'
import SidebarCard from './SidebarCard';
import './sidebar.scss'
export default class Sidebar extends Component {
    render(){
        return (
            
            <div className="sidebar">
                {this.props.cards.map(card=>{
                    return <SidebarCard role={card.role} keywords={card.keywords} id={card.id}/>
                })}
            </div>
        )
    }
}
