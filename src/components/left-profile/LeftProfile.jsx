import React, {useEffect, useState} from 'react'

import './LeftProfile.css'

const LeftProfile = prop => {
    const [userData, setUserData] = useState(prop.userData);
    const [isLoad, setIsLoad] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!isLoad) {
            setName(userData?.data?.name ?? '');
            setIsLoad(true);
        }
        console.log('name :' + userData);
    }, [prop.userData]);
    return (
        <>
            <div className="right-profile">
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            username:
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-map-alt'></i>
                            <input type="text" placeholder='street' value={prop?.userData?.data?.street ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-home'></i>
                            <input type="text" title="home number" placeholder='username'
                                   value={prop?.userData?.data?.home_number ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-book-content'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.post_code ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bxs-city'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.city ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-map-alt'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.country ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bxs-business'></i>
                            <input type="text" placeholder='company' value={prop?.userData?.data?.company ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.userData?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftProfile
