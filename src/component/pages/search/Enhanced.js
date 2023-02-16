import React from 'react'

function Enhanced() {
  return (
    <div className="content-wrapper">
    {/* <!-- Main content --> */}
    <section className="content">
        <div className="container-fluid">
            <h2 className="text-center display-4">Enhanced Search</h2>
            <form action="enhanced-results.html">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Result Type:</label>
                                    <select className="select2" multiple="multiple" data-placeholder="Any" style={{width: "100%"}}>
                                        <option>Text only</option>
                                        <option>Images</option>
                                        <option>Video</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label>Sort Order:</label>
                                    <select className="select2" style={{width: "100%"}}>
                                        <option selected>ASC</option>
                                        <option>DESC</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label>Order By:</label>
                                    <select className="select2" style={{width: "100%"}}>
                                        <option selected>Title</option>
                                        <option>Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <input type="search" className="form-control form-control-lg" placeholder="Type your keywords here" value="Lorem ipsum"/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-lg btn-default">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
  </div>
  )
}

export default Enhanced