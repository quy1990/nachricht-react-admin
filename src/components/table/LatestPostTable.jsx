import React from 'react'
import './table.css'
import Table from "./Table";
import Badge from "../badge/Badge";

const tableHead = [
    "order id",
    "user",
    "total price",
    "date",
    "status"
];

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.author.user_name}</td>
        <td>{item.category.user_name}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const LatestPost = props => {
    const url = '/latest-posts';

    return (
        <div>
            <div className="card">
                <div className="card__header">
                    <h3>Latest Posts</h3>
                </div>
                <div className="card__body">
                    <Table
                        limit='10'
                        url={url}
                        headData={tableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
            </div>
        </div>
    )
}

export default LatestPost
