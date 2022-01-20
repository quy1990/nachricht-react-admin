import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import user_menu from '../../assets/JsonData/user_menus.json'
import AxiosInstance from "../AxiosInstance";
import './topnav.css'

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.avatar} alt=""/>
        </div>
        <div className="topnav__right-user__name">
            {user.name}
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

const TopNavUserProfile = () => {
    let url = '/auth/user-profile';
    const [userProfile, setUserProfile] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await AxiosInstance.get(url);
        setUserProfile(request.data);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [userProfile.data, url]);

    return (
        <div className="topnav__right-item">
            <Dropdown
                customToggle={() => renderUserToggle(userProfile)}
                contentData={user_menu}
                renderItems={(item, index) => renderUserMenu(item, index)}
            />
        </div>
    )
}

export default TopNavUserProfile
