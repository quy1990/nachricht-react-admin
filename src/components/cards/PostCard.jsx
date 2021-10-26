import React, {useEffect, useState} from 'react'
import StatusCard from "../status-card/StatusCard";
import axios from "../axios";

const PostCard = props => {
    let url = 'dash-broad';
    const [bodyData, setBodyData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await axios.get(url);
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
                        <StatusCard
                            icon={item.icon}
                            count={item.count}
                            title={item.title}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default PostCard
