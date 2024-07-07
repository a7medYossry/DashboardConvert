import { faker } from '@faker-js/faker';
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-crosshair';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            fill: true,
            radius: 0,
            tension: 0.4,
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            radius: 0,
            tension: 0.4,
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235)',
            fill: true,
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        crosshair: {
            line: {
                color: '#ccc',
                width: 1,
                dashPattern: [5, 5],
            },
            zoom: {
                enabled: false,
            },
            snap: {
                enabled: true,
            },
            callbacks: {
                label: (item) => {
                    return `${item.yLabel}`;
                },
            },
            mode: 'xy', // set the mode to 'xy' to show both x and y crosshairs
        },
    },
};

function LineChartFill() {
    return (
        <div style={{ minHeight: '250px', maxHeight: '300px', maxWidth: '100%', position: 'relative' }}>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChartFill;