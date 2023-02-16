import React from 'react'

function Simple() {
  return (
    <div className="content-wrapper">

    {/* <!-- Main content --> */}
    <section className="content">
        <div className="container-fluid">
            <h2 className="text-center display-4">Search</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form action="simple-results.html">
                        <div className="input-group">
                            <input type="search" className="form-control form-control-lg" placeholder="Type your keywords here"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-lg btn-default">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </div>
  )
}

export default Simple