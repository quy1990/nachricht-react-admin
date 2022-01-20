import React from 'react'
import Table from '../components/table/Table'
import Button from "@material-ui/core/Button";

const customerTableHead = [
    '#',
    'name',
    'post_count',
    ''
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.post_count}</td>
        <td align={"right"}>
            <i className='bx bx-edit-alt'></i> <i className='bx bx-trash'></i>
        </td>
    </tr>
)

const CategoriesPage = () => {

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

export default CategoriesPage
