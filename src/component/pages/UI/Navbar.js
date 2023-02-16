import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>
              Navbar & Tabs
              <small>new</small>
            </h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Navbar & Tabs</li>
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
          <div className="col-md-12">
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-edit"></i>
                  Navbar Examples
                </h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4>Default Navbar <small>(navbar-light)</small></h4>
                    <nav className="navbar navbar-expand navbar-light">
                      {/* <!-- Left navbar links --> */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="pushmenu" to={{}} role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to="../../index3.html" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to={{}} className="nav-link">Contact</Link>
                        </li>
                      </ul>

                      {/* <!-- Right navbar links --> */}
                      <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="navbar-search" data-target="#navbar-search1" to={{}} role="button">
                            <i className="fas fa-search"></i>
                          </Link>
                          <div className="navbar-search-block" id="navbar-search1">
                            <form className="form-inline">
                              <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                  <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                  </button>
                                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">Call me whenever you can

                                  </p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">I got your message bro</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">The subject goes here</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Messages</Link>
                          </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-envelope mr-2"></i> 4 new messages
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-users mr-2"></i> 8 friend requests
                              <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-file mr-2"></i> 3 new reports
                              <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Notifications</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="fullscreen" to={{}} role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={{}} role="button">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4>Default Navbar <small>(navbar-white navbar-light)</small></h4>
                    <nav className="navbar navbar-expand navbar-white navbar-light">
                      {/* <!-- Left navbar links --> */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="pushmenu" to={{}} role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to="../../index3.html" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to={{}} className="nav-link">Contact</Link>
                        </li>
                      </ul>

                      {/* <!-- Right navbar links --> */}
                      <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="navbar-search" data-target="#navbar-search2" to={{}} role="button">
                            <i className="fas fa-search"></i>
                          </Link>
                          <div className="navbar-search-block" id="navbar-search2">
                            <form className="form-inline">
                              <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                  <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                  </button>
                                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">Call me whenever you can

                                  </p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">I got your message bro</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">The subject goes here</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Messages</Link>
                          </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-envelope mr-2"></i> 4 new messages
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-users mr-2"></i> 8 friend requests
                              <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-file mr-2"></i> 3 new reports
                              <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Notifications</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="fullscreen" to={{}} role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={{}} role="button">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4 className="mt-4">Primary Navbar <small><b>recommended</b> (navbar-primary navbar-dark)</small></h4>
                    <nav className="navbar navbar-expand navbar-primary navbar-dark">
                      {/* <!-- Left navbar links --> */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="pushmenu" to={{}} role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to="../../index3.html" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to={{}} className="nav-link">Contact</Link>
                        </li>
                      </ul>

                      {/* <!-- Right navbar links --> */}
                      <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="navbar-search" data-target="#navbar-search3" to={{}} role="button">
                            <i className="fas fa-search"></i>
                          </Link>
                          <div className="navbar-search-block" id="navbar-search3">
                            <form className="form-inline">
                              <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                  <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                  </button>
                                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">Call me whenever you can

                                  </p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">I got your message bro</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">The subject goes here</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Messages</Link>
                          </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-envelope mr-2"></i> 4 new messages
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-users mr-2"></i> 8 friend requests
                              <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-file mr-2"></i> 3 new reports
                              <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Notifications</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="fullscreen" to={{}} role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={{}} role="button">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4 className="mt-4">Primary Navbar <small>(navbar-primary navbar-light)</small></h4>
                    <nav className="navbar navbar-expand navbar-primary navbar-light">
                      {/* <!-- Left navbar links --> */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="pushmenu" to={{}} role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to="../../index3.html" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to={{}} className="nav-link">Contact</Link>
                        </li>
                      </ul>

                      {/* <!-- Right navbar links --> */}
                      <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="navbar-search" data-target="#navbar-search4" to={{}} role="button">
                            <i className="fas fa-search"></i>
                          </Link>
                          <div className="navbar-search-block" id="navbar-search4">
                            <form className="form-inline">
                              <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                  <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                  </button>
                                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">Call me whenever you can

                                  </p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">I got your message bro</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">The subject goes here</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Messages</Link>
                          </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-envelope mr-2"></i> 4 new messages
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-users mr-2"></i> 8 friend requests
                              <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-file mr-2"></i> 3 new reports
                              <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Notifications</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="fullscreen" to={{}} role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={{}} role="button">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4 className="mt-4">Orange Navbar <small><b>recommended</b> (navbar-orange navbar-light)</small></h4>
                    <nav className="navbar navbar-expand navbar-orange navbar-light">
                      {/* <!-- Left navbar links --> */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="pushmenu" to={{}} role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to="../../index3.html" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to={{}} className="nav-link">Contact</Link>
                        </li>
                      </ul>

                      {/* <!-- Right navbar links --> */}
                      <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="navbar-search" data-target="#navbar-search5" to={{}} role="button">
                            <i className="fas fa-search"></i>
                          </Link>
                          <div className="navbar-search-block" id="navbar-search5">
                            <form className="form-inline">
                              <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                  <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                  </button>
                                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">Call me whenever you can

                                  </p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">I got your message bro</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">The subject goes here</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Messages</Link>
                          </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-envelope mr-2"></i> 4 new messages
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-users mr-2"></i> 8 friend requests
                              <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-file mr-2"></i> 3 new reports
                              <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Notifications</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="fullscreen" to={{}} role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={{}} role="button">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4 className="mt-4">Orange Navbar <small>(navbar-orange navbar-dark)</small></h4>
                    <nav className="navbar navbar-expand navbar-orange navbar-dark">
                      {/* <!-- Left navbar links --> */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="pushmenu" to={{}} role="button"><i className="fas fa-bars"></i></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to="../../index3.html" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <Link to={{}} className="nav-link">Contact</Link>
                        </li>
                      </ul>

                      {/* <!-- Right navbar links --> */}
                      <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="navbar-search" data-target="#navbar-search6" to={{}} role="button">
                            <i className="fas fa-search"></i>
                          </Link>
                          <div className="navbar-search-block" id="navbar-search6">
                            <form className="form-inline">
                              <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                  <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                  </button>
                                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">Call me whenever you can

                                  </p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">I got your message bro</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              {/* <!-- Message Start --> */}
                              <div className="media">
                                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                <div className="media-body">
                                  <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                  </h3>
                                  <p className="text-sm">The subject goes here</p>
                                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                              </div>
                              {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Messages</Link>
                          </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown">
                          <Link className="nav-link" data-toggle="dropdown" to={{}}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-envelope mr-2"></i> 4 new messages
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-users mr-2"></i> 8 friend requests
                              <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item">
                              <i className="fas fa-file mr-2"></i> 3 new reports
                              <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to={{}} className="dropdown-item dropdown-footer">See All Notifications</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="fullscreen" to={{}} role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={{}} role="button">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* <!-- /.card --> */}
            </div>
          </div>
          {/* <!-- /.col --> */}
        </div>
        {/* <!-- ./row --> */}
        <div className="row">
          <div className="col-12">
            <h4>Nav Tabs inside Card Header <small>card-tabs / card-outline-tabs</small></h4>
          </div>
        </div>
        {/* <!-- ./row --> */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="card card-primary card-tabs">
              <div className="card-header p-0 pt-1">
                <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" to="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" to="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" to="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Messages</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-one-settings-tab" data-toggle="pill" to="#custom-tabs-one-settings" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="false">Settings</Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="custom-tabs-one-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-one-settings" role="tabpanel" aria-labelledby="custom-tabs-one-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              {/* <!-- /.card --> */}
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="card card-primary card-tabs">
              <div className="card-header p-0 pt-1">
                <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                  <li className="pt-2 px-3"><h3 className="card-title">Card Title</h3></li>
                  <li className="nav-item">
                    <Link className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" to="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill" to="#custom-tabs-two-profile" role="tab" aria-controls="custom-tabs-two-profile" aria-selected="false">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-two-messages-tab" data-toggle="pill" to="#custom-tabs-two-messages" role="tab" aria-controls="custom-tabs-two-messages" aria-selected="false">Messages</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-two-settings-tab" data-toggle="pill" to="#custom-tabs-two-settings" role="tab" aria-controls="custom-tabs-two-settings" aria-selected="false">Settings</Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="custom-tabs-two-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-two-home" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-profile" role="tabpanel" aria-labelledby="custom-tabs-two-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-messages" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-settings" role="tabpanel" aria-labelledby="custom-tabs-two-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              {/* <!-- /.card --> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="card card-primary card-outline card-tabs">
              <div className="card-header p-0 pt-1 border-bottom-0">
                <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" to="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" to="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" to="#custom-tabs-three-messages" role="tab" aria-controls="custom-tabs-three-messages" aria-selected="false">Messages</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-three-settings-tab" data-toggle="pill" to="#custom-tabs-three-settings" role="tab" aria-controls="custom-tabs-three-settings" aria-selected="false">Settings</Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="custom-tabs-three-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-three-messages" role="tabpanel" aria-labelledby="custom-tabs-three-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-three-settings" role="tabpanel" aria-labelledby="custom-tabs-three-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              {/* <!-- /.card --> */}
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="card card-primary card-outline card-outline-tabs">
              <div className="card-header p-0 border-bottom-0">
                <ul className="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link active" id="custom-tabs-four-home-tab" data-toggle="pill" to="#custom-tabs-four-home" role="tab" aria-controls="custom-tabs-four-home" aria-selected="true">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-four-profile-tab" data-toggle="pill" to="#custom-tabs-four-profile" role="tab" aria-controls="custom-tabs-four-profile" aria-selected="false">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-four-messages-tab" data-toggle="pill" to="#custom-tabs-four-messages" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="false">Messages</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-four-settings-tab" data-toggle="pill" to="#custom-tabs-four-settings" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">Settings</Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="custom-tabs-four-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-four-home" role="tabpanel" aria-labelledby="custom-tabs-four-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-four-profile" role="tabpanel" aria-labelledby="custom-tabs-four-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-four-messages" role="tabpanel" aria-labelledby="custom-tabs-four-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-four-settings" role="tabpanel" aria-labelledby="custom-tabs-four-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              {/* <!-- /.card --> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Nav Tabs Overlay for loading</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary card-tabs">
              <div className="card-header p-0 pt-1">
                <ul className="nav nav-tabs" id="custom-tabs-five-tab" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link active" id="custom-tabs-five-overlay-tab" data-toggle="pill" to="#custom-tabs-five-overlay" role="tab" aria-controls="custom-tabs-five-overlay" aria-selected="true">Overlay</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-five-overlay-dark-tab" data-toggle="pill" to="#custom-tabs-five-overlay-dark" role="tab" aria-controls="custom-tabs-five-overlay-dark" aria-selected="false">Overlay Dark</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="custom-tabs-five-normal-tab" data-toggle="pill" to="#custom-tabs-five-normal" role="tab" aria-controls="custom-tabs-five-normal" aria-selected="false">Normal Tab</Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="custom-tabs-five-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-five-overlay" role="tabpanel" aria-labelledby="custom-tabs-five-overlay-tab">
                    <div className="overlay-wrapper">
                      <div className="overlay"><i className="fas fa-3x fa-sync-alt fa-spin"></i><div className="text-bold pt-2">Loading...</div></div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                    </div>
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-five-overlay-dark" role="tabpanel" aria-labelledby="custom-tabs-five-overlay-dark-tab">
                    <div className="overlay-wrapper">
                      <div className="overlay dark"><i className="fas fa-3x fa-sync-alt fa-spin"></i><div className="text-bold pt-2">Loading...</div></div>
                      Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                    </div>
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-five-normal" role="tabpanel" aria-labelledby="custom-tabs-five-normal-tab">
                    Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                </div>
              </div>
              {/* <!-- /.card --> */}
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-edit"></i>
              Vertical Tabs Examples
            </h3>
          </div>
          <div className="card-body">
            <h4>Left Sided</h4>
            <div className="row">
              <div className="col-5 col-sm-3">
                <div className="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                  <Link className="nav-link active" id="vert-tabs-home-tab" data-toggle="pill" to="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="true">Home</Link>
                  <Link className="nav-link" id="vert-tabs-profile-tab" data-toggle="pill" to="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="false">Profile</Link>
                  <Link className="nav-link" id="vert-tabs-messages-tab" data-toggle="pill" to="#vert-tabs-messages" role="tab" aria-controls="vert-tabs-messages" aria-selected="false">Messages</Link>
                  <Link className="nav-link" id="vert-tabs-settings-tab" data-toggle="pill" to="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="false">Settings</Link>
                </div>
              </div>
              <div className="col-7 col-sm-9">
                <div className="tab-content" id="vert-tabs-tabContent">
                  <div className="tab-pane text-left fade show active" id="vert-tabs-home" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-profile" role="tabpanel" aria-labelledby="vert-tabs-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-messages" role="tabpanel" aria-labelledby="vert-tabs-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-settings" role="tabpanel" aria-labelledby="vert-tabs-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mt-4">Right Sided <small>(nav-tabs-right)</small></h4>
            <div className="row">
              <div className="col-7 col-sm-9">
                <div className="tab-content" id="vert-tabs-right-tabContent">
                  <div className="tab-pane fade show active" id="vert-tabs-right-home" role="tabpanel" aria-labelledby="vert-tabs-right-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-right-profile" role="tabpanel" aria-labelledby="vert-tabs-right-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-right-messages" role="tabpanel" aria-labelledby="vert-tabs-right-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-right-settings" role="tabpanel" aria-labelledby="vert-tabs-right-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              <div className="col-5 col-sm-3">
                <div className="nav flex-column nav-tabs nav-tabs-right h-100" id="vert-tabs-right-tab" role="tablist" aria-orientation="vertical">
                  <Link className="nav-link active" id="vert-tabs-right-home-tab" data-toggle="pill" to="#vert-tabs-right-home" role="tab" aria-controls="vert-tabs-right-home" aria-selected="true">Home</Link>
                  <Link className="nav-link" id="vert-tabs-right-profile-tab" data-toggle="pill" to="#vert-tabs-right-profile" role="tab" aria-controls="vert-tabs-right-profile" aria-selected="false">Profile</Link>
                  <Link className="nav-link" id="vert-tabs-right-messages-tab" data-toggle="pill" to="#vert-tabs-right-messages" role="tab" aria-controls="vert-tabs-right-messages" aria-selected="false">Messages</Link>
                  <Link className="nav-link" id="vert-tabs-right-settings-tab" data-toggle="pill" to="#vert-tabs-right-settings" role="tab" aria-controls="vert-tabs-right-settings" aria-selected="false">Settings</Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.card --> */}
        </div>
        {/* <!-- /.card --> */}
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-edit"></i>
              Tabs Custom Content Examples
            </h3>
          </div>
          <div className="card-body">
            <h4>Custom Content Below</h4>
            <ul className="nav nav-tabs" id="custom-content-below-tab" role="tablist">
              <li className="nav-item">
                <Link className="nav-link active" id="custom-content-below-home-tab" data-toggle="pill" to="#custom-content-below-home" role="tab" aria-controls="custom-content-below-home" aria-selected="true">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="custom-content-below-profile-tab" data-toggle="pill" to="#custom-content-below-profile" role="tab" aria-controls="custom-content-below-profile" aria-selected="false">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="custom-content-below-messages-tab" data-toggle="pill" to="#custom-content-below-messages" role="tab" aria-controls="custom-content-below-messages" aria-selected="false">Messages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="custom-content-below-settings-tab" data-toggle="pill" to="#custom-content-below-settings" role="tab" aria-controls="custom-content-below-settings" aria-selected="false">Settings</Link>
              </li>
            </ul>
            <div className="tab-content" id="custom-content-below-tabContent">
              <div className="tab-pane fade show active" id="custom-content-below-home" role="tabpanel" aria-labelledby="custom-content-below-home-tab">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
              </div>
              <div className="tab-pane fade" id="custom-content-below-profile" role="tabpanel" aria-labelledby="custom-content-below-profile-tab">
                 Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
              </div>
              <div className="tab-pane fade" id="custom-content-below-messages" role="tabpanel" aria-labelledby="custom-content-below-messages-tab">
                 Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
              </div>
              <div className="tab-pane fade" id="custom-content-below-settings" role="tabpanel" aria-labelledby="custom-content-below-settings-tab">
                 Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
              </div>
            </div>
            <div className="tab-custom-content">
              <p className="lead mb-0">Custom Content goes here</p>
            </div>
            <h4 className="mt-5 ">Custom Content Above</h4>
            <ul className="nav nav-tabs" id="custom-content-above-tab" role="tablist">
              <li className="nav-item">
                <Link className="nav-link active" id="custom-content-above-home-tab" data-toggle="pill" to="#custom-content-above-home" role="tab" aria-controls="custom-content-above-home" aria-selected="true">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="custom-content-above-profile-tab" data-toggle="pill" to="#custom-content-above-profile" role="tab" aria-controls="custom-content-above-profile" aria-selected="false">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="custom-content-above-messages-tab" data-toggle="pill" to="#custom-content-above-messages" role="tab" aria-controls="custom-content-above-messages" aria-selected="false">Messages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="custom-content-above-settings-tab" data-toggle="pill" to="#custom-content-above-settings" role="tab" aria-controls="custom-content-above-settings" aria-selected="false">Settings</Link>
              </li>
            </ul>
            <div className="tab-custom-content">
              <p className="lead mb-0">Custom Content goes here</p>
            </div>
            <div className="tab-content" id="custom-content-above-tabContent">
              <div className="tab-pane fade show active" id="custom-content-above-home" role="tabpanel" aria-labelledby="custom-content-above-home-tab">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
              </div>
              <div className="tab-pane fade" id="custom-content-above-profile" role="tabpanel" aria-labelledby="custom-content-above-profile-tab">
                 Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
              </div>
              <div className="tab-pane fade" id="custom-content-above-messages" role="tabpanel" aria-labelledby="custom-content-above-messages-tab">
                 Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
              </div>
              <div className="tab-pane fade" id="custom-content-above-settings" role="tabpanel" aria-labelledby="custom-content-above-settings-tab">
                 Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
              </div>
            </div>
          </div>
          {/* <!-- /.card --> */}
        </div>
        {/* <!-- /.card --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default Navbar