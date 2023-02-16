import React from 'react'
import { Link } from 'react-router-dom'

function Faq() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>FAQ</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">FAQ</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </section>

    {/* <!-- Main content --> */}
    <section className="content">
        <div className="row">
            <div className="col-12" id="accordion">
                <div className="card card-primary card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseOne">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                1. Lorem ipsum dolor sit amet
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </div>
                </div>
                <div className="card card-primary card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseTwo">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                2. Aenean massa
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </div>
                    </div>
                </div>
                <div className="card card-primary card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseThree">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                3. Donec quam felis
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </div>
                    </div>
                </div>
                <div className="card card-warning card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseFour">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                4. Donec pede justo
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseFour" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        </div>
                    </div>
                </div>
                <div className="card card-warning card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseFive">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                5. In enim justo
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseFive" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        </div>
                    </div>
                </div>
                <div className="card card-warning card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseSix">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                6. Integer tincidunt
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseSix" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        </div>
                    </div>
                </div>
                <div className="card card-danger card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseSeven">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                7. Aenean leo ligula
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseSeven" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        </div>
                    </div>
                </div>
                <div className="card card-danger card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseEight">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                8. Aliquam lorem ante
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseEight" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                        </div>
                    </div>
                </div>
                <div className="card card-danger card-outline">
                    <Link className="d-block w-100" data-toggle="collapse" to="#collapseNine">
                        <div className="card-header">
                            <h4 className="card-title w-100">
                                9.  Quisque rutrum
                            </h4>
                        </div>
                    </Link>
                    <div id="collapseNine" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-3 text-center">
                <p className="lead">
                    <Link to="contact-us.html">Contact us</Link>,
                    if you found not the right anwser or you have a other question?<br />
                </p>
            </div>
        </div>
    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default Faq