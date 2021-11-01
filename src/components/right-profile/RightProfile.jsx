import React from 'react'
import user_image from '../../assets/images/avata.jfif'

import './RightProfile.css'

const RightProfile = prop => {
    return (
        <div className="card right-profile">
            <img src={user_image} className="circleImageLayout" alt="avatar"/>
            <div className="right-profile__input">
                <i className='bx bx-user'></i>
                <input type="text" placeholder='username' value={prop?.userData?.data?.name??''}/>
            </div>
            <div className="right-profile__input">
                <i className='bx bx-mail-send'></i>
                <input type="text" placeholder='email' value={prop?.userData?.data?.email??''}/>
            </div>
            <div className="right-profile__input">
                <i className='bx bx bx-building'></i>
                <input type="text" placeholder='email' value={prop?.userData?.data?.email??''}/>
            </div>
            <div className="right-profile__input">
                <i className='bx bx-phone'></i>
                <input type="text" placeholder='email' value={prop?.userData?.data?.email??''}/>
            </div>
        </div>
    )
}

export default RightProfile
