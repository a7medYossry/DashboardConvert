import { Link, NavLink } from 'react-router-dom'

import AccordionRo from '../UI/AccordionRo';
// import 'bootstrap/dist/css/bootstrap.min.css'
const SideBar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
            <NavLink to="/index3" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </NavLink>

            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                {/* <!-- Sidebar user panel (optional) --> */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                    </div>
                    <div className="info">
                        <NavLink to={{}} className="d-block">Alexander Pierce</NavLink>
                    </div>
                </div>

                {/* <!-- SidebarSearch Form --> */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* <!-- Add icons to the links using the .nav-icon className */}
                        {/* with font-awesome or any other icon font library --> */}
                        <AccordionRo name='Dashboards'
                            leftIcons={<i className="nav-icon fas fa-tachometer-alt"></i>}
                            opened={true}>
                            <li className="nav-item">
                                <NavLink to="/./index" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Dashboard v1</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/./index2" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Dashboard v2</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/./index3" className="nav-link nav-links ">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Dashboard v3</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        {/* <li className="nav-item menu-open">
                            <NavLink to={{}} className="nav-link nav-links active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/./index" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Dashboard v1</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/./index2" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Dashboard v2</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/./index3" className="nav-link nav-links active">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Dashboard v3</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li> */}
                        {/* <AccordionRo name='Widgets'
                            rightIcons={<span className="right badge badge-danger">New</span>}
                            icons={<i className="nav-icon fas fa-th"></i>}>
                        </AccordionRo> */}
                        <li className="nav-item">
                            <NavLink to="pages/widgets" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Widgets
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <AccordionRo name={'Layout Options'}
                            badge='6'
                            leftIcons={<i className="nav-icon fas fa-copy"></i>}>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/top-nav" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Top Navigation</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/top-nav-sidebar" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Top Navigation + Sidebar</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/boxed" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Boxed</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/fixed-sidebar" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Fixed Sidebar</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/fixed-sidebar-custom" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/fixed-topnav" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Fixed Navbar</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/fixed-footer" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Fixed Footer</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/layout/collapsed-sidebar" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Collapsed Sidebar</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo
                            name={'Charts'}
                            leftIcons={<i className="nav-icon fas fa-chart-pie"></i>}
                        >
                            <li className="nav-item">
                                <NavLink to="/pages/charts/chartjs" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>ChartJS</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/charts/flot" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Flot</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/charts/inline" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Inline</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/charts/uplot" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>uPlot</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo name='UI Elements'
                            leftIcons={<i className="nav-icon fas fa-tree"></i>}
                        >
                            <li className="nav-item">
                                <NavLink to="/pages/UI/general" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>General</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/icons" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Icons</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/buttons" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Buttons</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/sliders" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Sliders</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/modals" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Modals & Alerts</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/navbar" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Navbar & Tabs</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/timeline" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Timeline</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/UI/ribbons" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Ribbons</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo
                            name='Forms'
                            leftIcons={<i className="nav-icon fas fa-edit"></i>}>
                            <li className="nav-item">
                                <NavLink to="/pages/forms/general" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>General Elements</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/forms/advanced" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Advanced Elements</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/forms/editors" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Editors</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/forms/validation" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Validation</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo name='Tables'
                            leftIcons={<i className="nav-icon fas fa-table"></i>}>
                            <li className="nav-item">
                                <NavLink to="/pages/tables/simple" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Simple Tables</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/tables/data" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>DataTables</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/tables/jsgrid" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>jsGrid</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item">
                            <NavLink to="/pages/calendar" className="nav-link nav-links">
                                <i className="nav-icon fas fa-calendar-alt"></i>
                                <p>
                                    Calendar
                                    <span className="badge badge-info right">2</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/gallery" className="nav-link nav-links">
                                <i className="nav-icon far fa-image"></i>
                                <p>
                                    Gallery
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/kanban" className="nav-link nav-links">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Kanban Board
                                </p>
                            </NavLink>
                        </li>
                        <AccordionRo name='Mailbox'
                            leftIcons={<i className="nav-icon far fa-envelope"></i>}
                        >
                            <li className="nav-item">
                                <NavLink to="/pages/mailbox/mailbox" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Inbox</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/mailbox/compose" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Compose</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/mailbox/read-mail" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Read</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo name='Pages'
                            leftIcons={<i className="nav-icon fas fa-book"></i>}>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/invoice" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Invoice</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/profile" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Profile</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/e-commerce" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>E-commerce</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/projects" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Projects</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/project-add" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Project Add</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/project-edit" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Project Edit</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/project-detail" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Project Detail</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/contacts" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Contacts</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/faq" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>FAQ</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/contact-us" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Contact us</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo name='Extras'
                            leftIcons={<i className="nav-icon far fa-plus-square"></i>}>
                            <AccordionRo name='Login & Register v1'
                                leftIcons={<i className="far fa-circle nav-icon"></i>}>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/login" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Login v1</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/register" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Register v1</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/forgot-password" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Forgot Password v1</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/recover-password" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Recover Password v1</p>
                                    </NavLink>
                                </li>
                            </AccordionRo>
                            <AccordionRo name='Login & Register v2'
                                leftIcons={<i className="far fa-circle nav-icon"></i>}>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/login-v2" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Login v2</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/register-v2" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Register v2</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/forgot-password-v2" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Forgot Password v2</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pages/examples/recover-password-v2" className="nav-link nav-links">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Recover Password v2</p>
                                    </NavLink>
                                </li>
                            </AccordionRo>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/lockscreen" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Lockscreen</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/legacy-user-menu" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Legacy User Menu</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/language-menu" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Language Menu</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/404" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Error 404</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/500" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Error 500</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/pace" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Pace</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/examples/blank" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Blank Page</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/starter" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Starter Page</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <AccordionRo name='Search'
                            leftIcons={<i className="nav-icon fas fa-search"></i>}>
                            <li className="nav-item">
                                <NavLink to="/pages/search/simple" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Simple Search</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pages/search/enhanced" className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Enhanced</p>
                                </NavLink>
                            </li>
                        </AccordionRo>
                        <li className="nav-header">MISCELLANEOUS</li>

                        <li className="nav-item">
                            <NavLink to="/iframe" className="nav-link nav-links">
                                <i className="nav-icon fas fa-ellipsis-h"></i>
                                <p>Tabbed IFrame Plugin</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/https://adminlte.io/docs/3.1/" className="nav-link nav-links">
                                <i className="nav-icon fas fa-file"></i>
                                <p>Documentation</p>
                            </NavLink>
                        </li>
                        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                        <li className="nav-item">
                            <Link to={{}} className="nav-link nav-links">
                                <i className="fas fa-circle nav-icon"></i>
                                <p>Level 1</p>
                            </Link>
                        </li>
                        <AccordionRo name='Level1'
                            leftIcons={<i className="nav-icon fas fa-circle"></i>}>
                            <li className="nav-item">
                                <Link to={{}} className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Level 2</p>
                                </Link>
                            </li>
                            <AccordionRo name='Level 2'
                                leftIcons={<i className="far fa-circle nav-icon"></i>}>
                                <li className="nav-item">
                                    <Link to={{}} className="nav-link nav-links">
                                        <i className="far fa-dot-circle nav-icon"></i>
                                        <p>Level 3</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{}} className="nav-link nav-links">
                                        <i className="far fa-dot-circle nav-icon"></i>
                                        <p>Level 3</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{}} className="nav-link nav-links">
                                        <i className="far fa-dot-circle nav-icon"></i>
                                        <p>Level 3</p>
                                    </Link>
                                </li>
                            </AccordionRo>
                            <li className="nav-item">
                                <Link to={{}} className="nav-link nav-links">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Level 2</p>
                                </Link>
                            </li>
                        </AccordionRo>
                        <li className="nav-item ">
                            <Link to={{}} className="nav-link nav-links">
                                <i className="fas fa-circle nav-icon"></i>
                                <p>Level 1</p>
                            </Link>
                        </li>

                        <li className="nav-header">LABELS</li>
                        <li className="nav-item">
                            <Link to={{}} className="nav-link nav-links">
                                <i className="nav-icon far fa-circle text-danger"></i>
                                <p className="text">Important</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{}} className="nav-link nav-links">
                                <i className="nav-icon far fa-circle text-warning"></i>
                                <p>Warning</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{}} className="nav-link nav-links">
                                <i className="nav-icon far fa-circle text-info"></i>
                                <p>Informational</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* <!-- /.sidebar-menu --> */}
            </div>
            {/* <!-- /.sidebar --> */}
        </aside>
    )
}

export default SideBar