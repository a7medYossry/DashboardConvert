import React from 'react'
import { Link } from 'react-router-dom'

function ProjectAdd() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Project Add</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Project Add</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </section>

    {/* <!-- Main content --> */}
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">General</h3>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label for="inputName">Project Name</label>
                <input type="text" id="inputName" className="form-control"/>
              </div>
              <div className="form-group">
                <label for="inputDescription">Project Description</label>
                <textarea id="inputDescription" className="form-control" rows="4"></textarea>
              </div>
              <div className="form-group">
                <label for="inputStatus">Status</label>
                <select id="inputStatus" className="form-control custom-select">
                  <option selected disabled>Select one</option>
                  <option>On Hold</option>
                  <option>Canceled</option>
                  <option>Success</option>
                </select>
              </div>
              <div className="form-group">
                <label for="inputClientCompany">Client Company</label>
                <input type="text" id="inputClientCompany" className="form-control"/>
              </div>
              <div className="form-group">
                <label for="inputProjectLeader">Project Leader</label>
                <input type="text" id="inputProjectLeader" className="form-control"/>
              </div>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
        <div className="col-md-6">
          <div className="card card-secondary">
            <div className="card-header">
              <h3 className="card-title">Budget</h3>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label for="inputEstimatedBudget">Estimated budget</label>
                <input type="number" id="inputEstimatedBudget" className="form-control"/>
              </div>
              <div className="form-group">
                <label for="inputSpentBudget">Total amount spent</label>
                <input type="number" id="inputSpentBudget" className="form-control"/>
              </div>
              <div className="form-group">
                <label for="inputEstimatedDuration">Estimated project duration</label>
                <input type="number" id="inputEstimatedDuration" className="form-control"/>
              </div>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link to={{}} className="btn btn-secondary">Cancel</Link>
          <input type="submit" value="Create new Project" className="btn btn-success float-right"/>
        </div>
      </div>
    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default ProjectAdd