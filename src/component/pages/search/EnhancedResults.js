import React from 'react'

function EnhancedResults() {
  return (
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <div className="container-fluid">
        <h2 className="text-center display-4">Enhanced Search</h2>
      </div>
      {/* <!-- /.container-fluid --> */}
    </section>

    {/* <!-- Main content --> */}
    <section className="content">
        <div className="container-fluid">
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
            <div className="row mt-3">
                <div className="col-md-10 offset-md-1">
                    <div className="list-group">
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col px-4">
                                    <div>
                                        <div className="float-right">2021-04-20 04:04pm</div>
                                        <h3>Lorem ipsum dolor sit amet</h3>
                                        <p className="mb-0">consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    <img className="img-fluid" src="../../dist/img/photo1.png" alt="noname" style={{maxHeight: "160px"}}/>
                                </div>
                                <div className="col px-4">
                                    <div>
                                        <div className="float-right">2021-04-20 10:14pm</div>
                                        <h3>Lorem ipsum dolor sit amet</h3>
                                        <p className="mb-0">consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    <iframe width="240" height="160" title="Enhancedresult" src="https://www.youtube.com/embed/WEkSYw3o5is?controls=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="border-0"  allowfullscreen></iframe>
                                </div>
                                <div className="col px-4">
                                    <div>
                                        <div className="float-right">2021-04-20 11:54pm</div>
                                        <h3>Lorem ipsum dolor sit amet</h3>
                                        <p className="mb-0">consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
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

export default EnhancedResults