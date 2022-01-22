import React, {useEffect, useState} from 'react'

import './RightProfile.css'
import AxiosInstance from "../AxiosInstance";

const RightProfile = prop => {
    const url = 'auth/avatar';
    const [avatar, setAvatar] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [selectedFile, setSelectedFile] = useState();

    const getAvatar = async () => {
        const request = await AxiosInstance.get(url);
        setAvatar(request.data.data);
    }

    useEffect(() => {
        if (!isLoad) {
            getAvatar();
            setIsLoad(true);
        }
    }, [avatar, url]);

    const changeHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        setAvatar(event.target.files[0]);
    };

    const handleSubmission = async () => {
        const fromData = new FormData();
        fromData.append('avatar', avatar);
        avatar && await AxiosInstance
            .post(url, fromData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    };

    const openPopup = () => {
        document.getElementById('selectFile').click();
    }

    return (
        <div className="card right-profile">
            <input
                type="file"
                id="selectFile"
                style={{display: 'none'}}
                name="file"
                onChange={changeHandler}/>

            <img src={selectedFile ?? avatar}
                 className="circleImageLayout"
                 alt="avatar"
                 onClick={() => openPopup()}
            />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
}

export default RightProfile
