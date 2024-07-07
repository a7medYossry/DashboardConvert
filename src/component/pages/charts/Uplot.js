import React from 'react'
import { Link } from 'react-router-dom'
import LineChartFlot from '../../UI/charts/Flot/LineChartFlot'
import Card from '../../UI/card/Card'

function Uplot() {
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
                                <li className="breadcrumb-item"><Link to='#'>Home</Link></li>
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
                    {/* <!-- AREA CHART --> */}
                    <Card name='Area Chart' color='card-primary'  >
                        <div className="chart">
                            <LineChartFlot tension={0} fill={true} color={['#cbcfd8', '#4e98c2']} backgroundColor={['#cbcfd878', '#4e98c280']} />
                        </div>
                    </Card>
                    {/* <!-- /.card --> */}

                    {/* <!-- LINE CHART --> */}
                    <Card name='Line Chart' color='card-info'>
                        <div className="chart">
                            <LineChartFlot tension={0} borderWidth={4} pointRadius={[6]} color={['#cbcfd8', '#4e98c2']} backgroundColor={['white', 'white']} />
                        </div>
                    </Card>
                    {/* <!-- /.card --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
    )
}

export default Uplot