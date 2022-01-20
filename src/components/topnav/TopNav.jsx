import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import ThemeMenu from '../thememenu/ThemeMenu'
import AxiosInstance from "../AxiosInstance";
import './topnav.css'
import TopNavUserProfile from "./TopNavUserProfile";

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const TopNav = props => {
    let url = '/latest-comments';
    const [notifications, setNotifications] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await AxiosInstance.get(url);
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
                    <TopNavUserProfile/>
                </div>
                <div className="topnav__right-item">
                    {
                        notifications.length > 0 && <Dropdown
                            icon='bx bx-bell'
                            badge={notifications.length}
                            contentData={notifications}
                            renderItems={(item, index) => renderNotificationItem(item, index)}
                            renderFooter={() => <Link to='/comments'>View All</Link>}
                        />
                    }
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default TopNav
