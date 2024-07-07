import React from 'react'
import { Link } from 'react-router-dom'

function ProjectDetail() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Project Detail</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Project Detail</li>
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
          <h3 className="card-title">Projects Detail</h3>

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
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">Estimated budget</span>
                      <span className="info-box-number text-center text-muted mb-0">2300</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">Total amount spent</span>
                      <span className="info-box-number text-center text-muted mb-0">2000</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">Estimated project duration</span>
                      <span className="info-box-number text-center text-muted mb-0">20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4>Recent Activity</h4>
                    <div className="post">
                      <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user"/>
                        <span className="username">
                          <Link to={{}}>Jonathan Burke Jr.</Link>
                        </span>
                        <span className="description">Shared publicly - 7:45 PM today</span>
                      </div>
                      {/* <!-- /.user-block --> */}
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>

                      <p>
                        <Link to={{}} className="link-black text-sm"><i className="fas fa-link mr-1"></i> Demo File 1 v2</Link>
                      </p>
                    </div>

                    <div className="post clearfix">
                      <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg" alt="User"/>
                        <span className="username">
                          <Link to={{}}>Sarah Ross</Link>
                        </span>
                        <span className="description">Sent you a message - 3 days ago</span>
                      </div>
                      {/* <!-- /.user-block --> */}
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>
                      <p>
                        <Link to={{}} className="link-black text-sm"><i className="fas fa-link mr-1"></i> Demo File 2</Link>
                      </p>
                    </div>

                    <div className="post">
                      <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user"/>
                        <span className="username">
                          <Link to={{}}>Jonathan Burke Jr.</Link>
                        </span>
                        <span className="description">Shared publicly - 5 days ago</span>
                      </div>
                      {/* <!-- /.user-block --> */}
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>

                      <p>
                        <Link to={{}} className="link-black text-sm"><i className="fas fa-link mr-1"></i> Demo File 1 v1</Link>
                      </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
              <h3 className="text-primary"><i className="fas fa-paint-brush"></i> AdminLTE v3</h3>
              <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
              <br/>
              <div className="text-muted">
                <p className="text-sm">Client Company
                  <b className="d-block">Deveint Inc</b>
                </p>
                <p className="text-sm">Project Leader
                  <b className="d-block">Tony Chicken</b>
                </p>
              </div>

              <h5 className="mt-5 text-muted">Project files</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="" className="btn-link text-secondary"><i className="far fa-fw fa-file-word"></i> Functional-requirements.docx</Link>
                </li>
                <li>
                  <Link to="" className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf"></i> UAT.pdf</Link>
                </li>
                <li>
                  <Link to="" className="btn-link text-secondary"><i className="far fa-fw fa-envelope"></i> Email-from-flatbal.mln</Link>
                </li>
                <li>
                  <Link to="" className="btn-link text-secondary"><i className="far fa-fw fa-image "></i> Logo.png</Link>
                </li>
                <li>
                  <Link to="" className="btn-link text-secondary"><i className="far fa-fw fa-file-word"></i> Contract-10_12_2014.docx</Link>
                </li>
              </ul>
              <div className="text-center mt-5 mb-3">
                <Link to={{}} className="btn btn-sm btn-primary">Add files</Link>
                <Link to={{}} className="btn btn-sm btn-warning">Report contact</Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.card-body --> */}
      </div>
      {/* <!-- /.card --> */}

    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default ProjectDetail