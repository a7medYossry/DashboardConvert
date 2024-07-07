import React, { useEffect, useState, useRef } from 'react'
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
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
    Filler,
    zoomPlugin
);
let delayed;
export const options = {
    maintainAspectRatio: false,
    // aspectRatio:1/50,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 1 + context.datasetIndex * 1;
            }
            return delay;
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        filler: {
            propagate: true
        },
        zoom: {
            pan: {
                enabled: true,
                mode: 'x'
            },
            zoom: {
                pinch: {
                    enabled: true       // Enable pinch zooming
                },
                wheel: {
                    enabled: true       // Enable wheel zooming
                },
                mode: 'x',
            }
        }
    },
    scales: {
        x: {
            type: 'linear'
        }
    },
};

const labels = [];

function InteractiveAreaChart({ active = 'active' }) {
    for (let i = 0; i < 10; i++) {
        labels[i * 5] = `${i * 10}`
        for (let r = 0; r < 50; r++) {
            labels[i * 5 + r + 1] = ''
        }
    }
    const [data, setData] = useState({

        datasets: [
            {
                fill: true,
                radius: 0,
                lineTension: 0,
                label: 'Dataset 1',
                data: [{ x: 0, y: 10 }],
                borderColor: 'rgba(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },

        ],
    })
    let dataRef = useRef([])
    let h = useRef(0)
    useEffect(() => {
        if (active === 'active') {
            const intervalId = setInterval(() => {
                dataRef.current = [...data.datasets[0].data, { x: h.current, y: Math.random() * 2 + 10 }]
                setData(prevData => ({
                    ...prevData,
                    datasets: [{ ...prevData.datasets[0], data: dataRef.current }],

                }))
                h.current = h.current + 1
            }, 1000)
            return () => {
                clearInterval(intervalId);
            }
        }

    }, [data, active]);


    return (
        <div style={{ minHeight: "250px", maxHeight: "300px", maxWidth: "100%" }}>
            <Line data={data} options={options} />
        </div>)
}

export default InteractiveAreaChart