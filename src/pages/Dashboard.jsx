import React from 'react'
import TopUserTable from "../components/table/TopUserTable";
import LatestPostTable from "../components/table/LatestPostTable";
import PostChart from "../components/charts/PostChart";
import PostCard from "../components/cards/PostCard";

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <PostCard/>
                </div>
                <div className="col-6">
                    <PostChart/>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <TopUserTable/>
                </div>
                <div className="col-8">
                    <LatestPostTable/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
