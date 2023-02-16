import React from 'react'
import { Link } from 'react-router-dom'

function Mailboxs
() {
    return (
        <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Inbox</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                                <li className="breadcrumb-item active">Inbox</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="compose.html" className="btn btn-primary btn-block mb-3">Compose</Link>

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
                            <div className="card-body p-0">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <Link to={{}} className="nav-link">
                                            <i className="far fa-circle text-danger"></i>
                                            Important
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={{}} className="nav-link">
                                            <i className="far fa-circle text-warning"></i> Promotions
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={{}} className="nav-link">
                                            <i className="far fa-circle text-primary"></i>
                                            Social
                                        </Link>
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
                                <h3 className="card-title">Inbox</h3>

                                <div className="card-tools">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" placeholder="Search Mail"/>
                                            <div className="input-group-append">
                                                <div className="btn btn-primary">
                                                    <i className="fas fa-search"></i>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                {/* <!-- /.card-tools --> */}
                            </div>
                            {/* <!-- /.card-header --> */}
                            <div className="card-body p-0">
                                <div className="mailbox-controls">
                                    {/* <!-- Check all button --> */}
                                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="far fa-square"></i>
                                    </button>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-sm">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            <i className="fas fa-reply"></i>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            <i className="fas fa-share"></i>
                                        </button>
                                    </div>
                                    {/* <!-- /.btn-group --> */}
                                    <button type="button" className="btn btn-default btn-sm">
                                        <i className="fas fa-sync-alt"></i>
                                    </button>
                                    <div className="float-right">
                                        1-50/200
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-sm">
                                                <i className="fas fa-chevron-left"></i>
                                            </button>
                                            <button type="button" className="btn btn-default btn-sm">
                                                <i className="fas fa-chevron-right"></i>
                                            </button>
                                        </div>
                                        {/* <!-- /.btn-group --> */}
                                    </div>
                                    {/* <!-- /.float-right --> */}
                                </div>
                                <div className="table-responsive mailbox-messages">
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check1"/>
                                                            <label for="check1"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">5 mins ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check2"/>
                                                            <label for="check2"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">28 mins ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check3"/>
                                                            <label for="check3"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">11 hours ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check4"/>
                                                            <label for="check4"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">15 hours ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check5"/>
                                                            <label for="check5"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">Yesterday</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check6"/>
                                                            <label for="check6"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check7"/>
                                                            <label for="check7"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check8"/>
                                                            <label for="check8"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check9"/>
                                                            <label for="check9"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check10"/>
                                                            <label for="check10"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">2 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check11"/>
                                                            <label for="check11"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">4 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check12"/>
                                                            <label for="check12"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"></td>
                                                <td className="mailbox-date">12 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check13"/>
                                                            <label for="check13"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star-o text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">12 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check14"/>
                                                            <label for="check14"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">14 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="icheck-primary">
                                                        <input type="checkbox" value="" id="check15"/>
                                                            <label for="check15"></label>
                                                    </div>
                                                </td>
                                                <td className="mailbox-star"><Link to={{}}><i className="fas fa-star text-warning"></i></Link></td>
                                                <td className="mailbox-name"><Link to="read-mail.html">Alexander Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                                                <td className="mailbox-date">15 days ago</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <!-- /.table --> */}
                                </div>
                                {/* <!-- /.mail-box-messages --> */}
                            </div>
                            {/* <!-- /.card-body --> */}
                            <div className="card-footer p-0">
                                <div className="mailbox-controls">
                                    {/* <!-- Check all button --> */}
                                    <button type="button" className="btn btn-default btn-sm checkbox-toggle">
                                        <i className="far fa-square"></i>
                                    </button>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-sm">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            <i className="fas fa-reply"></i>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            <i className="fas fa-share"></i>
                                        </button>
                                    </div>
                                    {/* <!-- /.btn-group --> */}
                                    <button type="button" className="btn btn-default btn-sm">
                                        <i className="fas fa-sync-alt"></i>
                                    </button>
                                    <div className="float-right">
                                        1-50/200
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-sm">
                                                <i className="fas fa-chevron-left"></i>
                                            </button>
                                            <button type="button" className="btn btn-default btn-sm">
                                                <i className="fas fa-chevron-right"></i>
                                            </button>
                                        </div>
                                        {/* <!-- /.btn-group --> */}
                                    </div>
                                    {/* <!-- /.float-right --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.card --> */}
                    </div>
                    {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
    )
}

export default Mailboxs
