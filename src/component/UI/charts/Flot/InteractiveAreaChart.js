import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        maintainAspectRatio: false,
        filler: {
            propagate: true
        }
    },
};

const labels = [];


// export const data = {
//     labels,
//     datasets: [
//         {
//             fill: true,
//             radius: 0,
//             lineTension: 0.4,
//             label: 'Dataset 1',
//             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgb(255, 99, 132)',
//         },

//     ],
// };



function InteractiveAreaChart() {
    for (let i = 0; i < 10; i++) {
        labels[i * 5] = `${i * 10}`
        for (let r = 0; r < 4; r++) {
            labels[i * 5 + r + 1] = ''
        }
    }
    const [data, setData] = useState({
        labels,
        datasets: [
            {
                fill: true,
                radius: 0,
                lineTension: 0.4,
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
            },

        ],
    })
    // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })) }

  

    const [count, setCount] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const end=data.datasets[0].data.length+count
            const x = faker.datatype.number({ min: -1000, max: 1000 })
            setData(prevData => ({
                ...prevData,
                datasets: [{ ...prevData.datasets[0], data:[...data.datasets[0].data.slice(count,end),x]}],

            }))
            const all=data.datasets[0].data.slice(count,end)
            console.log(all)
            setCount(count + 1)
            console.log(end)

        }, 5000)
        return () => {
            clearInterval(intervalId);
        }
    });


    return (
        <div style={{ minHeight: "250px", maxHeight: "300px", maxWidth: "100%" }}>
            <Line data={data} options={options} />
        </div>)
}

export default InteractiveAreaChart