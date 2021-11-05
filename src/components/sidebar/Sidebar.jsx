import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import SidebarItem from "./SidebarItem";
import user_image from "../../assets/images/avata.jfif";
import AxiosInstance from "../AxiosInstance";

const Sidebar = props => {
    const url = '/menus';
    const [menus, setMenus] = useState([]);
    const fetchData = async () => {
        const request = await AxiosInstance.get(url);
        setMenus(request.data);
    }

    useEffect(() => {
        fetchData();
    }, [setMenus]);

    const activeItem = menus && menus.findIndex(item => item.route === props.location.pathname);

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <Link to="/">
                    <img src={user_image} className="circleImageLayout" alt="avatar"/>
                </Link>
            </div>
            {
                menus && menus.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.name}
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
