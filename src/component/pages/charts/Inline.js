import React from 'react'
import { Link } from 'react-router-dom'
import DonutChartInline from '../../UI/charts/inLine/DonutChartInline'
import AreaChartFlot from '../../UI/charts/Flot/AreaChartFlot'
import Card from '../../UI/card/Card'

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
                            <Card name='jQuery Knob' bfName={<i className="far fa-chart-bar"></i>} >
                                <div className="row">
                                    <div className="col-6 col-md-3 text-center justify-content-center row">
                                        <div className='col-12 d-flex justify-content-center'><DonutChartInline color='#3c8dbc' percentage={Math.trunc(Math.random() * 100)} /></div>
                                        <div className="knob-label col">New Visitors</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center justify-content-center row">
                                        <div className='col-12 d-flex justify-content-center'><DonutChartInline color='#f56954' percentage={Math.trunc(Math.random() * 100)} /></div>
                                        <div className="knob-label col">Bounce Rate</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center justify-content-center row">
                                        <div className='col-12 d-flex justify-content-center'><DonutChartInline color='#932ab6' percentage={Math.trunc(Math.random() * 100)} /></div>
                                        <div className="knob-label col">Server Load</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center justify-content-center row">
                                        <div className='col-12 d-flex justify-content-center'><DonutChartInline color='#00a65a' percentage={Math.trunc(Math.random() * 100)} /></div>
                                        <div className="knob-label col">Disk Space</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                </div>
                                {/* <!-- /.row --> */}

                                <div className="row">
                                    <div className="col-6 text-center justify-content-center row">
                                        <div className='col-12 d-flex justify-content-center'><DonutChartInline color='#00c0ef' percentage={Math.trunc(Math.random() * 100)} /></div>
                                        <div className="knob-label col">Bandwidth</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 text-center justify-content-center row">
                                        <div className='col-12 d-flex justify-content-center'><DonutChartInline color='#00c0ef' percentage={Math.trunc(Math.random() * 100)} /></div>
                                        <div className="knob-label col">CPU</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                </div>
                            </Card>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    <div className="row">
                        <div className="col-12">
                            <Card name='jQuery Knob Different Sizes' bfName={<i className="far fa-chart-bar"></i>}>
                                <div className="row">
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#3c8dbc' percentage={Math.trunc(Math.random() * 100)} />
                                        </div>
                                        <div className="knob-label">data-width="90"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#f56954' maxHeight='150px' maxWidth='150px' cutout={50} percentage={Math.trunc(Math.random() * 100)} />
                                        </div>
                                        <div className="knob-label">data-width="120"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#932ab6' cutout={40} percentage={Math.trunc(Math.random() * 100)} />
                                        </div>

                                        <div className="knob-label">data-thickness="0.1"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#00c0ef' circumference={360 * (1 - 1 / 3)} rotation={245} percentage={Math.trunc(Math.random() * 100)} />
                                        </div>

                                        <div className="knob-label">data-anglearc="250"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                </div>
                            </Card>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    <div className="row">
                        <div className="col-12">
                            <Card name='jQuery Knob Tron Style' bfName={<i className="far fa-chart-bar"></i>}>
                                <div className="row">
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#00c0ef' borderWidth='2px' padding='2px' percentage={Math.trunc(Math.random() * 100)} />
                                        </div>
                                        <div className="knob-label">data-width="90"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#932ab6' borderWidth='2px' padding='2px' percentage={Math.trunc(Math.random() * 100)} />
                                        </div>
                                        <div className="knob-label">data-width="120"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center'>
                                            <DonutChartInline color='#f56954' borderWidth='2px' padding='2px' percentage={Math.trunc(Math.random() * 100)} />
                                        </div>
                                        <div className="knob-label">data-thickness="0.1"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-6 col-md-3 text-center">
                                        <div className='col-12 d-flex justify-content-center '>
                                            <div className='border-1 canavas-border'>
                                                <DonutChartInline color='#3c8dbc' margins='-8px 0 0 0' rotation={245}  circumference={360 - (1 / 3) * 360} percentage={Math.trunc(Math.random() * 100)} />
                                            </div>
                                        </div>
                                        <div className="knob-label">data-anglearc="250"</div>
                                    </div>
                                    {/* <!-- ./col --> */}
                                </div>
                            </Card>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    <div className="row">
                        <div className="col-12">
                            <Card name='Sparklines' bfName={<i className="far fa-chart-bar"></i>}>
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <AreaChartFlot tension={0} />
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-4 text-center">
                                        <AreaChartFlot tension={0} color='#9ac5de' backgroundColor='#9ac5de96' />
                                    </div>
                                    {/* <!-- ./col --> */}
                                    <div className="col-4 text-center">
                                        <AreaChartFlot tension={0} color='#63f54f' backgroundColor='#63f54f7d' />

                                    </div>
                                    {/* <!-- ./col --> */}
                                </div>
                            </Card>
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