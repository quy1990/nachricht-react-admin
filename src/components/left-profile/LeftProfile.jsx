import React, {useEffect, useState} from 'react'

import './LeftProfile.css'

const LeftProfile = prop => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(prop.userData.name ?? '');
        setEmail(prop.userData.email ?? '');
        console.log(prop.userData);
    }, [prop.userData]);

    return (
        <>
            <div className="right-profile">
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            {name && <input type="text" placeholder='username' value={name}
                                                          onChange={(e) => setName(e.target.value)}/>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-mail-send'></i>
                            {email && <input type="text" placeholder='street' value={email}
                                            onChange={(e) => setEmail(e.target.value)}/>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-home'></i>
                            <input type="text" title="home number" placeholder='username'
                                   value={prop?.user?.data?.home_number ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-book-content'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.post_code ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bxs-city'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.city ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-map-alt'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.country ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bxs-business'></i>
                            <input type="text" placeholder='company' value={prop?.user?.data?.company ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder='username' value={prop?.user?.data?.name ?? ''}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftProfile
