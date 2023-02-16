import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../../UI/Card';
import BarChart from '../../UI/charts/chartjs/BarChart';
import DonutChart from '../../UI/charts/chartjs/DonutChart';
import LineChartFill from '../../UI/charts/chartjs/LineChartFill';
import LineChartStacked from '../../UI/charts/chartjs/LineChartStacked';
import PieChart from '../../UI/charts/chartjs/PieChart';
import StackedBarChart from '../../UI/charts/chartjs/StackedBarChart';
import InteractiveAreaChart from '../../UI/charts/Flot/InteractiveAreaChart';


const Chartjs = () => {
    return (
        <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>ChartJS</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                                <li className="breadcrumb-item active">ChartJS</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Card name='InteractiveAreaChart' color='card-primary'>
                                <InteractiveAreaChart />
                            </Card>
                            {/* <!-- AREA CHART --> */}
                            <Card name='Area Chart' color='card-primary'>
                                <LineChartFill />
                            </Card>
                            {/* <!-- AREA CHART --> */}
                            {/* <!-- DONUT CHART --> */}
                            <Card name='Donut Chart' color='card-danger'>
                                <DonutChart />
                            </Card>
                            {/* <!-- DONUT CHART --> */}
                            {/* <!-- PIE CHART --> */}
                            <Card name='Pie Chart' color='card-danger'><PieChart /></Card>
                            {/* <!-- PIE CHART --> */}
                        </div>
                        {/* <!-- /.col (LEFT) --> */}
                        <div className="col-md-6">
                            {/* <!-- LINE CHART --> */}
                            <Card name='Line Chart' color='card-info'><LineChartStacked /></Card>
                            {/* <!-- LINE CHART --> */}
                            {/* <!-- BAR CHART --> */}
                            <Card name='Bar Chart' color='card-success'><BarChart /></Card>
                            {/* <!-- BAR CHART --> */}
                            {/* <!-- STACKED BAR CHART --> */}
                            <Card name='Stacked Bar Chart' color='card-success'><StackedBarChart /></Card>
                            {/* <!-- STACKED BAR CHART --> */}
                        </div>
                        {/* <!-- /.col (RIGHT) --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
    )
}

export default Chartjs