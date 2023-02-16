import React from 'react'
import { Link } from 'react-router-dom'

function Contacts() {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Contacts</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                <li className="breadcrumb-item active">Contacts</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <section className="content">

        {/* <!-- Default box --> */}
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user2-160x160.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user2-160x160.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead"><b>Nicole Pearson</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                          <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img src="../../dist/img/user2-160x160.jpg" alt="user-avatar" className="img-circle img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to={{}} className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i>
                      </Link>
                      <Link to={{}} className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.card-body --> */}
          <div className="card-footer">
            <nav aria-label="Contacts Page Navigation">
              <ul className="pagination justify-content-center m-0">
                <li className="page-item active"><Link className="page-link" to={{}}>1</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>2</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>3</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>4</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>5</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>6</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>7</Link></li>
                <li className="page-item"><Link className="page-link" to={{}}>8</Link></li>
              </ul>
            </nav>
          </div>
          {/* <!-- /.card-footer --> */}
        </div>
        {/* <!-- /.card --> */}

      </section>

  {/* <!-- /.content --> */ }
    </div>
  )
}

export default Contacts