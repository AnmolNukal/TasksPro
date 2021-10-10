import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import React from 'react';


const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0.3, "rgba(241,175,160,255");
    gradient.addColorStop(0.9, "rgba(239,236,242,0");
    return {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                data: [13, 25, 33, 44, 43, 24],
                fill: true,
                borderWidth: 4,
                backgroundColor: gradient,
                borderColor: 'rgba(234,150,132,255)',
                tension: 0.5,
            },
        ],
    }
};

const options = {
    elements: {
        point: {
            radius: 5,
            pointStyle: 'circle',
            borderColor: '#ffffff',
            borderWidth: 1,
            backgroundColor: '#ffffff'
        }
    },
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false
            },
        },
        y: {
            grid: {
                display: false,
                drawBorder: false
            }, ticks: {
                display: false
            }
        },
    },
}


const LineChart = () => {

    return <Wrapper>
        <div className="title">Your Pefromance</div>
        <div className="dropdown">Monthly</div>
        <div className="chart"><Line data={data} options={options} /></div>
        <div className="status">
            <div className="completed">24 Task Complete</div>
            <div className="notCompleted">1 Task Not Complete</div>
        </div>
    </Wrapper>
}


const Wrapper = styled.div`
    margin-top: 2rem;
    .title{
        margin-left:2rem
    }
    .dropdown{
        margin-left:2rem;
        margin-top:0.5rem;
    }
    .chart{
        width: 80%;
        height: 80%;
        margin-left:2rem;
    }
    .status{
        font-size: 0.6rem;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
    }
`

export default LineChart;