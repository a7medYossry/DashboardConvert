import React from 'react'
import { Link } from 'react-router-dom'

function Inline() {
    return (
        <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Inline Charts</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                                <li className="breadcrumb-item active">Inline Charts</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
                <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- jQuery Knob --> */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="far fa-chart-bar"></i>
                                        jQuery Knob
                                    </h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="30" data-width="90" data-height="90" data-fgColor="#3c8dbc"/>

                                                <div className="knob-label">New Visitors</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="70" data-width="90" data-height="90" data-fgColor="#f56954"/>

                                                <div className="knob-label">Bounce Rate</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="-80" data-min="-150" data-max="150" data-width="90"
                                                data-height="90" data-fgColor="#00a65a"/>

                                                <div className="knob-label">Server Load</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="40" data-width="90" data-height="90" data-fgColor="#00c0ef"/>

                                                <div className="knob-label">Disk Space</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                    </div>
                                    {/* <!-- /.row --> */}

                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <input type="text" className="knob" defaultValue="90" data-width="90" data-height="90" data-fgColor="#932ab6"/>

                                                <div className="knob-label">Bandwidth</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 text-center">
                                            <input type="text" className="knob" defaultValue="50" data-width="90" data-height="90" data-fgColor="#39CCCC"/>

                                                <div className="knob-label">CPU</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="far fa-chart-bar"></i>
                                        jQuery Knob Different Sizes
                                    </h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="30" data-width="90" data-height="90" data-fgColor="#3c8dbc"
                                                data-readonly="true"/>

                                                <div className="knob-label">data-width="90"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="30" data-width="120" data-height="120"
                                                data-fgColor="#f56954"/>

                                                <div className="knob-label">data-width="120"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="30" data-thickness="0.1" data-width="90" data-height="90"
                                                data-fgColor="#00a65a"/>

                                                <div className="knob-label">data-thickness="0.1"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" data-thickness="0.2" data-angleArc="250" data-angleOffset="-125"
                                                defaultValue="30" data-width="120" data-height="120" data-fgColor="#00c0ef"/>

                                                <div className="knob-label">data-angleArc="250"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="far fa-chart-bar"></i>
                                        jQuery Knob Tron Style
                                    </h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="80" data-skin="tron" data-thickness="0.2" data-width="90"
                                                data-height="90" data-fgColor="#3c8dbc" data-readonly="true"/>

                                                <div className="knob-label">data-width="90"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="60" data-skin="tron" data-thickness="0.2" data-width="120"
                                                data-height="120" data-fgColor="#f56954"/>

                                                <div className="knob-label">data-width="120"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="10" data-skin="tron" data-thickness="0.1" data-width="90"
                                                data-height="90" data-fgColor="#00a65a"/>

                                                <div className="knob-label">data-thickness="0.1"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-6 col-md-3 text-center">
                                            <input type="text" className="knob" defaultValue="100" data-skin="tron" data-thickness="0.2"
                                                data-angleArc="250" data-angleOffset="-125" data-width="120" data-height="120"
                                                data-fgColor="#00c0ef"/>

                                                <div className="knob-label">data-angleArc="250"</div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="far fa-chart-bar"></i>
                                        Sparklines
                                    </h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <div id="sparkline-1"></div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-4 text-center">
                                            <div id="sparkline-2"></div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                        <div className="col-4 text-center">
                                            <div id="sparkline-3"></div>
                                        </div>
                                        {/* <!-- ./col --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
    )
}

export default Inline