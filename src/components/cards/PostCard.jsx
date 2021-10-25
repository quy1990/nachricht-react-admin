import React from 'react'
import StatusCard from "../status-card/StatusCard";
import statusCards from '../../assets/JsonData/status-card-data.json'

const PostCard = props => {
    return (
        <div className="row">
            {
                statusCards.map((item, index) => (
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
