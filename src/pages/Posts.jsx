import React, {useEffect, useState} from 'react'
import axios from '../components/axios'
import Table from '../components/table/Table'

const customerTableHead = [
    '',
    'title',
    'body',
    'author',
    'category',
    "actions"
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td>{item.author.user_name}</td>
        <td>{item.category.user_name}</td>
        <td>action1/action2</td>
    </tr>
)

const Users = () => {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const request = await axios.get("/posts");
        setPosts([...request.data.data]);
    }

    useEffect(() => {
        if (posts.length === 0) {
            fetchData();
        }
    }, [posts]);

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
                                posts && posts.length > 0 ? (<Table
                                        limit='10'
                                        headData={customerTableHead}
                                        renderHead={(item, index) => renderHead(item, index)}
                                        bodyData={posts}
                                        renderBody={(item, index) => renderBody(item, index)}
                                    />
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
