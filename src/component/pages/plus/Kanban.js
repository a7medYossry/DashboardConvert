import React from 'react'
import { Link } from 'react-router-dom'

function Kanban() {
  return (
    <div className="content-wrapper kanban">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1>Kanban Board</h1>
          </div>
          <div className="col-sm-6 d-none d-sm-block">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Kanban Board</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="content pb-3">
      <div className="container-fluid h-100">
        <div className="card card-row card-secondary">
          <div className="card-header">
            <h3 className="card-title">
              Backlog
            </h3>
          </div>
          <div className="card-body">
            <div className="card card-info card-outline">
              <div className="card-header">
                <h5 className="card-title">Create Labels</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#3</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox1" disabled/>
                  <label for="customCheckbox1" className="custom-control-label">Bug</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox2" disabled/>
                  <label for="customCheckbox2" className="custom-control-label">Feature</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled/>
                  <label for="customCheckbox3" className="custom-control-label">Enhancement</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox4" disabled/>
                  <label for="customCheckbox4" className="custom-control-label">Documentation</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox5" disabled/>
                  <label for="customCheckbox5" className="custom-control-label">Examples</label>
                </div>
              </div>
            </div>
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h5 className="card-title">Create Issue template</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#4</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox1_1" disabled/>
                  <label for="customCheckbox1_1" className="custom-control-label">Bug Report</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="customCheckbox1_2" disabled/>
                  <label for="customCheckbox1_2" className="custom-control-label">Feature Request</label>
                </div>
              </div>
            </div>
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h5 className="card-title">Create PR template</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#6</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card card-light card-outline">
              <div className="card-header">
                <h5 className="card-title">Create Actions</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#7</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>

              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-row card-primary">
          <div className="card-header">
            <h3 className="card-title">
              To Do
            </h3>
          </div>
          <div className="card-body">
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h5 className="card-title">Create first milestone</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#5</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-row card-default">
          <div className="card-header bg-info">
            <h3 className="card-title">
              In Progress
            </h3>
          </div>
          <div className="card-body">
            <div className="card card-light card-outline">
              <div className="card-header">
                <h5 className="card-title">Update Readme</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#2</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-row card-success">
          <div className="card-header">
            <h3 className="card-title">
              Done
            </h3>
          </div>
          <div className="card-body">
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h5 className="card-title">Create repo</h5>
                <div className="card-tools">
                  <Link to={{}} className="btn btn-tool btn-link">#1</Link>
                  <Link to={{}} className="btn btn-tool">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Kanban