import React, {useEffect, useState} from 'react'

import './topnav.css'

import {Link} from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'
import axios from "../axios";

const curr_user = {
    display_name: 'Tuat Tran',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt=""/>
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <Link to={item.url}>
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </Link>
        </div>
    </Link>
)

const Topnav = props => {
    let url = '/latest-comments';
    const [notifications, setNotifications] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await axios.get(url);
        setNotifications(request.data);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [notifications.data, url]);

    return (
        <div className='topnav'>
            <div className="topnav__search col-3">
                <input type="text" placeholder='Search here...'/>
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    {
                        notifications.length > 0 &&  <Dropdown
                            icon='bx bx-bell'
                            badge={notifications.length}
                            contentData={notifications}
                            renderItems={(item, index) => renderNotificationItem(item, index)}
                            renderFooter={() => <Link to='/comments'>View All</Link>}
                        />
                    }
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
