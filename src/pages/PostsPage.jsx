import React from 'react'
import Table from '../components/table/Table'
import Button from "@material-ui/core/Button";

const postTableHead = [
    '',
    'title',
    'body',
    'author',
    'category',
    ''
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td>{item.author.user_name}</td>
        <td>{item.category.user_name}</td>
        <td align={"right"}>
            <Button color="primary" variant="contained">
                Edit
            </Button>/
            <Button color="secondary" variant="contained">
                Delete
            </Button></td>
    </tr>
)

const PostsPage = () => {
    let url = "/posts";
    return (
        <div>
            <h2 className="page-header">
                posts
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {
                                <Table
                                    limit='10'
                                    headData={postTableHead}
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

export default PostsPage
