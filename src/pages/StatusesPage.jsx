import React from 'react'
import Table from '../components/table/Table'
import Badge from "../components/badge/Badge";

const customerTableHead = [
    '#',
    'name',
    ''
]

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td><Badge type={orderStatus[item.name]} content={item.name}/></td>
        <td align={"right"}>
            <i className='bx bx-edit-alt'></i> <i className='bx bx-trash'></i>
        </td>
    </tr>
)

const StatusesPage = () => {
    let url = "/statuses";

    return (
        <div>
            <h2 className="page-header">
                Statuses
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {
                                <Table
                                    limit='10'
                                    headData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    url={url}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusesPage
