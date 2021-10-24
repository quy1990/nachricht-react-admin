import React, {useEffect, useState} from 'react'
import axios from '../components/axios'
import Table from '../components/table/Table'

const customerTableHead = [
    '',
    'name',
    'subscribe_count',
    "actions"
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.subscribe_count}</td>
        <td>action1/action2</td>
    </tr>
)

const Users = () => {
    const [roles, setRoles] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const fetchData = async () => {
        const request = await axios.get("/roles");
        setRoles([...request.data.data]);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [roles]);

    return (
        <div>
            <h2 className="page-header">
                roles
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {
                                roles && roles.length > 0 ? (<Table
                                        limit='10'
                                        headData={customerTableHead}
                                        renderHead={(item, index) => renderHead(item, index)}
                                        bodyData={roles}
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
