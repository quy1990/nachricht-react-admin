import React, { useEffect, useState } from 'react'
import axios from '../components/axios'
import Table from '../components/table/Table'

const customerTableHead = [
    '',
    'title',
    'body',
    'author',
    'category'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td>{item.author.user_name}</td>
        <td>{item.category.user_name}</td>
    </tr>
)

const Users = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/posts',
            );

            setCustomers(result.data.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customers}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
