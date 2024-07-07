import React from 'react'
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
  maintainAspectRatio: false,
  plugins: {
      legend: {
          position: 'top',
      },
      title: {
          display: false,
          text: 'Chart.js Line Chart',
      },
      lineElement: true
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
      {
          radius: 0,
          lineTension: 0.4,
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgb(255, 99, 132)',
      },
      {
          radius: 0,
          lineTension: 0.4,
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235)',
      },
  ],
};
function LineChartStacked() {
  return (
    <div style={{ minHeight: "250px", maxHeight: "300px", maxWidth: "100%" }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChartStacked