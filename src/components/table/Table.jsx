import React, {useEffect, useState} from 'react'
import './table.css'
import AxiosInstance from "../AxiosInstance";
import StatusPopup from "../Popups/StatusPopup";
import Button from "@material-ui/core/Button";

const Table = props => {
    const [url, setUrl] = useState(props.url);
    const [bodyData, setBodyData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const fetchData = async () => {
        const request = await AxiosInstance.get(url);
        setBodyData(request.data);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [bodyData.data, url]);

    const selectPage = item => {
        setUrl(item.url);
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                            <tr>
                                {
                                    props.headData.map((item, index) => props.renderHead(item, index))
                                }
                            </tr>
                            </thead>
                        ) : null
                    }
                    {
                        bodyData.data && props.renderBody ? (
                            <tbody>
                            {
                                bodyData.data.map((item, index) => props.renderBody(item, index))
                            }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                bodyData.meta && bodyData.meta.links.length > 3 ? (
                    <div className="table__pagination">
                        {
                            bodyData.meta.links.map((item, index) => (
                                item.url &&
                                <div key={index}
                                     className={`table__pagination-item ${item.active === true ? 'active' : ''}`}
                                     onClick={() => selectPage(item)}>
                                    {item.label}
                                </div>
                            ))
                        }
                    </div>) : null
            }

            {isOpen && <StatusPopup
                content={<>
                    <div className="popup_body">
                        <b>Edit Status</b>
                        <br/>
                        <br/>
                        <div>
                            <div className="left-profile__search">
                                <i className='bx bx-user'></i>
                                <input type="text" placeholder='username' value="" name='name'/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Button color="primary" variant="contained" className="bx-align-left" onClick="">Edit</Button>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default Table
