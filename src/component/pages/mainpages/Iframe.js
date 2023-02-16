import React from 'react'
import { Link } from 'react-router-dom'

function Iframe() {
    return (
        <div className="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
            <div className="nav navbar navbar-expand navbar-white navbar-light border-bottom p-0">
                <div className="nav-item dropdown">
                    <Link className="nav-link bg-danger dropdown-toggle" data-toggle="dropdown" to={{}} role="button" aria-haspopup="true" aria-expanded="false">Close</Link>
                    <div className="dropdown-menu mt-0">
                        <Link className="dropdown-item" to={{}} data-widget="iframe-close" data-type="all">Close All</Link>
                        <Link className="dropdown-item" to={{}} data-widget="iframe-close" data-type="all-other">Close All Other</Link>
                    </div>
                </div>
                <Link className="nav-link bg-light" to={{}} data-widget="iframe-scrollleft"><i className="fas fa-angle-double-left"></i></Link>
                <ul className="navbar-nav overflow-hidden" role="tablist"></ul>
                <Link className="nav-link bg-light" to={{}} data-widget="iframe-scrollright"><i className="fas fa-angle-double-right"></i></Link>
                <Link className="nav-link bg-light" to={{}} data-widget="iframe-fullscreen"><i className="fas fa-expand"></i></Link>
            </div>
            <div className="tab-content">
                <div className="tab-empty">
                    <h2 className="display-4">No tab selected!</h2>
                </div>
                <div className="tab-loading">
                    <div>
                        <h2 className="display-4">Tab is loading <i className="fa fa-sync fa-spin"></i></h2>
                    </div>
                </div>
            </div>
        </div>)
}

export default Iframe