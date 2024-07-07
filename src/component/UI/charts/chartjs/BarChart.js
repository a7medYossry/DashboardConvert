import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart({dataSetLabel=[],color=[],backgroundColor=[]}) {
    const options = {
        maintainAspectRatio:false,
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                align:'end'
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
            
        },
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
        labels,
        datasets: [
            {
                label: (dataSetLabel[0] ??'Dataset'),
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: (backgroundColor[0]??'rgba(255, 99, 132, 0.5)'),
            },
            {
                label: (dataSetLabel[1] ??'Dataset'),
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor:(backgroundColor[1]??'rgba(53, 162, 235, 0.5)') ,
            },
        ],
    };
    return (
        <div style={{ minHeight: "250px", maxHeight: "300px" }}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChart