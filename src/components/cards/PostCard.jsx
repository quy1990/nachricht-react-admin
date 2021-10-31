import React, {useEffect, useState} from 'react'
import StatusCard from "../status-card/StatusCard";
import AxiosInstance from "../AxiosInstance";
import {Link} from "react-router-dom";

const PostCard = props => {
    let url = 'dash-broad';
    const [bodyData, setBodyData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await AxiosInstance.get(url);
        setBodyData(request.data.data);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [bodyData.data, url]);


    return (
        <div className="row">
            {
                bodyData.length > 0 && bodyData.map((item, index) => (
                    <div className="col-6" key={index}>
                        <Link to={item.url}>
                            <StatusCard
                                icon={item.icon}
                                count={item.count}
                                title={item.title}
                            />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default PostCard
