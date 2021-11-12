import React, {useState} from 'react'
import Table from '../../components/table/Table'
import Badge from "../../components/badge/Badge";
import Button from "@material-ui/core/Button";
import StatusPopup from "../../components/Popups/StatusPopup";
import AxiosInstance from "../../components/AxiosInstance";

const customerTableHead = [
    '',
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
            <Button color="primary" variant="contained">
                Edit
            </Button>/
            <Button color="secondary" variant="contained">
                Delete
            </Button></td>
    </tr>
)

const StatusesPage = () => {
    let url = "/statuses";
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const addStatus = async () => {
        const request = await AxiosInstance.post(url, {
            'name': name
        });
        console.log(request, name);
    }

    return (
        <div>
            <div className="row">
                <h2 className="page-header col-10">
                    Statuses
                </h2>
                <div className="page-header col-2">
                    <Button color="success" variant="contained" onClick={togglePopup}>+</Button>
                </div>
            </div>

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

            {isOpen && <StatusPopup
                content={<>
                    <div className="popup_body">
                        <b>Edit Status</b>
                        <br/>
                        <br/>
                        <div>
                            <div className="left-profile__search">
                                <i className='bx bx-user'></i>
                                <input type="text" placeholder='username' value={name} name='name' onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Button color="primary" variant="contained" className="bx-align-left" onClick={addStatus}>Edit</Button>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default StatusesPage
