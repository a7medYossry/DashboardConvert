import React from 'react'
import { Link } from 'react-router-dom'

function Editors() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Text Editors</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
              <li className="breadcrumb-item active">Text Editors</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </section>

    {/* <!-- Main content --> */}
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                Summernote
              </h3>
            </div>
            {/* <!-- /.card-header --> */}
            <div className="card-body">
              <textarea id="summernote">
                {/* Place <em>some</em> <u>text</u> <strong>here</strong> */}
              </textarea>
            </div>
            <div className="card-footer">
              Visit <Link to="https://github.com/summernote/summernote/">Summernote</Link> documentation for more examples and information about the plugin.
            </div>
          </div>
        </div>
        {/* <!-- /.col--> */}
      </div>
      {/* <!-- ./row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                CodeMirror
              </h3>
            </div>
            {/* <!-- /.card-header --> */}
            <div className="card-body p-0">
              <textarea id="codeMirrorDemo" className="p-3">
{/* <div className="info-box bg-gradient-info">
  <span className="info-box-icon"><i className="far fa-bookmark"></i></span>
  <div className="info-box-content">
    <span className="info-box-text">Bookmarks</span>
    <span className="info-box-number">41,410</span>
    <div className="progress">
      <div className="progress-bar" style={{width: '70%'}}></div>
    </div>
    <span className="progress-description">
      70% Increase in 30 Days
    </span>
  </div>
</div> */}
              </textarea>
            </div>
            <div className="card-footer">
              Visit <Link to="https://codemirror.net/">CodeMirror</Link> documentation for more examples and information about the plugin.
            </div>
          </div>
        </div>
        {/* <!-- /.col--> */}
      </div>
      {/* <!-- ./row --> */}
    </section>
    {/* <!-- /.content --> */}
  </div>
  )
}

export default Editors