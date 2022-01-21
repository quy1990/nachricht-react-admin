import React, {useEffect, useState} from 'react'

import './RightProfile.css'

const RightProfile = prop => {
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        setAvatar(prop.userData.avatar ?? '');
        console.log(prop.userData);
    }, [prop.userData]);

    return (
        <div className="card right-profile">
            {avatar && <img src={avatar} className="circleImageLayout" alt="avatar"/>}
        </div>
    )
}

export default RightProfile
