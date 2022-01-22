import React, {useEffect, useState} from 'react'
import AxiosInstance from "../AxiosInstance";
import './Avatar.css'

const Avatar = () => {
    const avatarUrl = 'auth/avatar';
    const [avatar, setAvatar] = useState('');
    const [isLoad, setIsLoad] = useState(false);

    const getAvatar = async () => {
        const request = await AxiosInstance.get(avatarUrl);
        setAvatar(request.data.data);
    }

    useEffect(() => {
        if (!isLoad) {
            getAvatar();
            setIsLoad(true);
        }
    }, [avatar, avatarUrl]);

    return (
        <div className="topnav__right-user__avatar">
            <img src={avatar} alt=""/>
        </div>
    )
}

export default Avatar
