import React from 'react'
import { Link } from 'react-router-dom'

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
                    {/* <!-- AREA CHART --> */}
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Area Chart</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart">
                                <div id="areaChart" style={{minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%'}}></div>
                            </div>
                        </div>
                        {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}

                    {/* <!-- LINE CHART --> */}
                    <div className="card card-info">
                        <div className="card-header">
                            <h3 className="card-title">Line Chart</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart">
                                <div id="lineChart" style={{minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%'}}></div>
                            </div>
                        </div>
                        {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
    )
}

export default Uplot