import React from 'react'
import { Link } from 'react-router-dom'

function JsGrid() {
    return (
        <div class="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>jsGrid</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><Link to={{}}>Home</Link></li>
                                <li class="breadcrumb-item active">jsGrid</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section class="content">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">jsGrid</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                        <div id="jsGrid1"></div>
                    </div>
                    {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>

)}

export default JsGrid