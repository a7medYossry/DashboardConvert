import React from 'react'
import { Link } from 'react-router-dom'

function Icons() {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Icons</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                <li className="breadcrumb-item active">Icons</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">Icons</h3>
            </div>
            {/* <!-- /.card-body --> */}
            <div className="card-body">
              <p>You can use any font library you like with AdminLTE 3.</p>
              <strong>Recommendations</strong>
              <div>
                <Link to="https://fontawesome.com/">Font Awesome</Link><br/>
                  <Link to="https://useiconic.com/open/">Iconic Icons</Link><br/>
                    <Link to="https://ionicons.com/">Ion Icons</Link><br/>
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>
          {/* <!-- /.content --> */}
        </div>
        )
}

        export default Icons