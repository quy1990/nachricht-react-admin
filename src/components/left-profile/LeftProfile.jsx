import React, {useEffect, useState} from 'react'

import './LeftProfile.css'

const LeftProfile = prop => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [homeNumber, setHomeNumber] = useState('');
    const [postCode, setPostCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        setName(prop.userData.name ?? '');
        setEmail(prop.userData.email ?? '');
        setStreet(prop.userData.street ?? '');
        setHomeNumber(prop.userData.homeNumber ?? '');
        setPostCode(prop.userData.postCode ?? '');
        setCity(prop.userData.city ?? '');
        setCountry(prop.userData.country ?? '');
        setCompany(prop.userData.company ?? '');
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
                            <input type="text" title="street" placeholder='street'
                                   value={street ?? ''}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-book-content'></i>
                            <input type="text" placeholder='home number' value={homeNumber ?? ''}/>
                            {homeNumber && <input type="text" placeholder='homeNumber' value={homeNumber}
                                                  onChange={(e) => setHomeNumber(e.target.value)}/>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bxs-city'></i>
                            <input type="text" placeholder='postCode' value={postCode ?? ''}/>
                            {postCode && <input type="text" placeholder='postCode' value={postCode}
                                                onChange={(e) => setPostCode(e.target.value)}/>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-map-alt'></i>
                            <input type="text" placeholder='city' value={city ?? ''}/>
                            {city && <input type="text" placeholder='city' value={city}
                                            onChange={(e) => setCity(e.target.value)}/>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bxs-business'></i>
                            {country && <input type="text" placeholder='country' value={country}
                                               onChange={(e) => setCountry(e.target.value)}/>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="left-profile__search">
                            <i className='bx bx-user'></i>
                            {company && <input type="text" placeholder='company' value={company}
                                               onChange={(e) => setCompany(e.target.value)}/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftProfile
