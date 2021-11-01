import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import sidebar_menu from '../../assets/JsonData/sidebar_menu.json'
import SidebarItem from "./SidebarItem";

const Sidebar = props => {
    const activeItem = sidebar_menu.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <Link to="/">
                    <b>Admin Panel</b>
                </Link>
            </div>
            {
                sidebar_menu.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
