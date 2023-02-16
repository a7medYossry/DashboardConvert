import React from 'react'
import { Link } from 'react-router-dom'

function Compose() {
    return (
        <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Compose</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                                <li className="breadcrumb-item active">Compose</li>
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
                        <div className="col-md-3">
                            <Link to="mailbox.html" className="btn btn-primary btn-block mb-3">Back to Inbox</Link>

                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Folders</h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item active">
                                            <Link to={{}} className="nav-link">
                                                <i className="fas fa-inbox"></i> Inbox
                                                <span className="badge bg-primary float-right">12</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={{}} className="nav-link">
                                                <i className="far fa-envelope"></i> Sent
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={{}} className="nav-link">
                                                <i className="far fa-file-alt"></i> Drafts
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={{}} className="nav-link">
                                                <i className="fas fa-filter"></i> Junk
                                                <span className="badge bg-warning float-right">65</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={{}} className="nav-link">
                                                <i className="far fa-trash-alt"></i> Trash
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Labels</h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <div className="card-body p-0">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={{}}><i className="far fa-circle text-danger"></i> Important</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={{}}><i className="far fa-circle text-warning"></i> Promotions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={{}}><i className="far fa-circle text-primary"></i> Social</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-md-9">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h3 className="card-title">Compose New Message</h3>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <div className="card-body">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="To:" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Subject:" />
                                    </div>
                                    <div className="form-group">
                                        <textarea id="compose-textarea" className="form-control" style={{height: '300px'}}>
                                            {/* <h1><u>Heading Of Message</u></h1>
                                            <h4>Subheading</h4>
                                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                                was born and I will give you a complete account of the system, and expound the actual teachings
                                                of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                                                dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                                                how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                                                is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                                                but because occasionally circumstances occur in which toil and pain can procure him some great
                                                pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                                                except to obtain some advantage from it? But who has any right to find fault with a man who
                                                chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                                                produces no resultant pleasure? On the other hand, we denounce with righteous indignation and
                                                dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                blinded by desire, that they cannot foresee</p>
                                            <ul>
                                                <li>List item one</li>
                                                <li>List item two</li>
                                                <li>List item three</li>
                                                <li>List item four</li>
                                            </ul>
                                            <p>Thank you,</p>
                                            <p>John Doe</p> */}
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <div className="btn btn-default btn-file">
                                            <i className="fas fa-paperclip"></i> Attachment
                                            <input type="file" name="attachment" />
                                        </div>
                                        <p className="help-block">Max. 32MB</p>
                                    </div>
                                </div>
                                {/* <!-- /.card-body --> */}
                                <div className="card-footer">
                                    <div className="float-right">
                                        <button type="button" className="btn btn-default"><i className="fas fa-pencil-alt"></i> Draft</button>
                                        <button type="submit" className="btn btn-primary"><i className="far fa-envelope"></i> Send</button>
                                    </div>
                                    <button type="reset" className="btn btn-default"><i className="fas fa-times"></i> Discard</button>
                                </div>
                                {/* <!-- /.card-footer --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
    )
}

export default Compose