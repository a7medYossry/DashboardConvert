import React from 'react'
import { Link } from 'react-router-dom'

function Pace() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Pace</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Pace</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </section>

    {/* <!-- Main content --> */}
    <section className="content">

      {/* <!-- Default box --> */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Title</h3>

          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus"></i>
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          You can Change Pace Styles, Checkout the <Link to="https://adminlte.io/docs/3.1/" target="_blank" rel="noopener noreferrer">AdminLTE Official Docs</Link> in Online.
          <br/>
          Start creating your amazing application!
        </div>
        {/* <!-- /.card-body --> */}
        <div className="card-footer">
          Footer
        </div>
        {/* <!-- /.card-footer--> */}
      </div>
      {/* <!-- /.card --> */}

    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default Pace