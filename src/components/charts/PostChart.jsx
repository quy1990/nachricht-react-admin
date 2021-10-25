import React from 'react'
import Chart from "react-apexcharts";
import {useSelector} from "react-redux";

const PostChart = props => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    const chartOptions = {
        series: [{
            name: 'New Users',
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
        }, {
            name: 'New Posts',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
        }],
        options: {
            color: ['#6ab04c', '#2980b9'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: true
            }
        }
    }


    return (
        <div className="card full-height">
            {/* chart */}
            <Chart
                options={themeReducer === 'theme-mode-dark' ? {
                    ...chartOptions.options,
                    theme: {mode: 'dark'}
                } : {
                    ...chartOptions.options,
                    theme: {mode: 'light'}
                }}
                series={chartOptions.series}
                type='line'
                height='100%'
            />
        </div>
    )
}

export default PostChart
