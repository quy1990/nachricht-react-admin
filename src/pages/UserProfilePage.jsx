import React, {useEffect, useState} from "react";
import RightProfile from "../components/right-profile/RightProfile";
import LeftProfile from "../components/left-profile/LeftProfile";
import AxiosInstance from "../components/AxiosInstance";

const UserProfilePage = () => {
    let url = '/auth/user-profile';
    const [userData, setUserData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await AxiosInstance.get(url);
        setUserData(request.data);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [userData.data, url]);

    return (
        <div>
            <h2 className="page-header">Profile of User</h2>
            <div className="row">
                <div className="col-6">
                    <LeftProfile userData={userData}/>
                </div>
                <div className="col-6">
                    <RightProfile userData={userData}/>
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage
