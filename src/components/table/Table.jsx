import React, {useEffect, useState} from 'react'

import './table.css'
import axios from "../axios";

const Table = props => {
    const [url, setUrl] = useState(props.url);
    const [bodyData, setBodyData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await axios.get(url);
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
        setIsLoad(false);
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
        </div>
    )
}

export default Table
