import React, {useEffect, useState} from 'react'

import './table.css'
import axios from "../axios";

const Table = props => {
    const initUrl = props.url;
    const [bodyData, setBodyData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const fetchData = async () => {
        const request = await axios.get(initUrl);
        setBodyData([...request.data.data]);
    }

    useEffect(() => {
        if (!isLoad) {
            fetchData();
            setIsLoad(true);
        }
    }, [bodyData]);

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
                        bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    bodyData.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                <div className="table__pagination">
                </div>
            }
        </div>
    )
}

export default Table
