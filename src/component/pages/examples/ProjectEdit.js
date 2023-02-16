import React from 'react'
import { Link } from 'react-router-dom'

function ProjectEdit() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Project Edit</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Project Edit</li>
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
                <input type="text" id="inputName" className="form-control" value="AdminLTE"/>
              </div>
              <div className="form-group">
                <label for="inputDescription">Project Description</label>
                <textarea id="inputDescription" className="form-control" rows="4">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</textarea>
              </div>
              <div className="form-group">
                <label for="inputStatus">Status</label>
                <select id="inputStatus" className="form-control custom-select">
                  <option disabled>Select one</option>
                  <option>On Hold</option>
                  <option>Canceled</option>
                  <option selected>Success</option>
                </select>
              </div>
              <div className="form-group">
                <label for="inputClientCompany">Client Company</label>
                <input type="text" id="inputClientCompany" className="form-control" value="Deveint Inc"/>
              </div>
              <div className="form-group">
                <label for="inputProjectLeader">Project Leader</label>
                <input type="text" id="inputProjectLeader" className="form-control" value="Tony Chicken"/>
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
                <input type="number" id="inputEstimatedBudget" className="form-control" value="2300" step="1"/>
              </div>
              <div className="form-group">
                <label for="inputSpentBudget">Total amount spent</label>
                <input type="number" id="inputSpentBudget" className="form-control" value="2000" step="1"/>
              </div>
              <div className="form-group">
                <label for="inputEstimatedDuration">Estimated project duration</label>
                <input type="number" id="inputEstimatedDuration" className="form-control" value="20" step="0.1"/>
              </div>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Files</h3>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>File Size</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  <tr/>
                    <td>Functional-requirements.docx</td>
                    <td>49.8005 kb</td>
                    <td className="text-right py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                        <Link to={{}} className="btn btn-info"><i className="fas fa-eye"></i></Link>
                        <Link to={{}} className="btn btn-danger"><i className="fas fa-trash"></i></Link>
                      </div>
                    </td>
                  <tr/>
                    <td>UAT.pdf</td>
                    <td>28.4883 kb</td>
                    <td className="text-right py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                        <Link to={{}} className="btn btn-info"><i className="fas fa-eye"></i></Link>
                        <Link to={{}} className="btn btn-danger"><i className="fas fa-trash"></i></Link>
                      </div>
                    </td>
                  <tr/>
                    <td>Email-from-flatbal.mln</td>
                    <td>57.9003 kb</td>
                    <td className="text-right py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                        <Link to={{}} className="btn btn-info"><i className="fas fa-eye"></i></Link>
                        <Link to={{}} className="btn btn-danger"><i className="fas fa-trash"></i></Link>
                      </div>
                    </td>
                  <tr/>
                    <td>Logo.png</td>
                    <td>50.5190 kb</td>
                    <td className="text-right py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                        <Link to={{}} className="btn btn-info"><i className="fas fa-eye"></i></Link>
                        <Link to={{}} className="btn btn-danger"><i className="fas fa-trash"></i></Link>
                      </div>
                    </td>
                  <tr/>
                    <td>Contract-10_12_2014.docx</td>
                    <td>44.9715 kb</td>
                    <td className="text-right py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                        <Link to={{}} className="btn btn-info"><i className="fas fa-eye"></i></Link>
                        <Link to={{}} className="btn btn-danger"><i className="fas fa-trash"></i></Link>
                      </div>
                    </td>

                </tbody>
              </table>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link to={{}} className="btn btn-secondary">Cancel</Link>
          <input type="submit" value="Save Changes" className="btn btn-success float-right"/>
        </div>
      </div>
    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default ProjectEdit