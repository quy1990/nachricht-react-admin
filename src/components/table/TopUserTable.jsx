import React from 'react'
import './table.css'
import Table from "./Table";

const tableHead = [
    'user',
    'name',
    'post count'
];

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.post_count}</td>
    </tr>
)

const TopUserTable = props => {
    const url = '/top-users';

    return (
        <div>
            <div className="card">
                <div className="card__header">
                    <h3>top Users</h3>
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

export default TopUserTable
