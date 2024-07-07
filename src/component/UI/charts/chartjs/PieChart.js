import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                padding:20,
                usePointStyle: true,
                boxWidth:20
            },
            pointStyle: 'circle',
            position: 'right',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        lineElement: true
    },
};
function PieChart({labels=['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}) {
    const data = {
        labels:labels,
        datasets: [
            {
                label: '# of Votes',
                data:labels.map(() => Math.random()*10),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={{ minHeight: '250px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Pie data={data} options={options} />
        </div>
    )
}

export default PieChart