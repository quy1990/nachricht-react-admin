import React from 'react'
import Table from '../components/table/Table'

const customerTableHead = [
    '',
    'name',
    'post_count',
    "actions"
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.post_count}</td>
        <td>action1/action2</td>
    </tr>
)

const Categories = () => {

    let url = "/categories";

    return (
        <div>
            <h2 className="page-header">
                categories
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

export default Categories
