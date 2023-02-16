import React from 'react'
import { Link } from 'react-router-dom'

function IframeDark() {
    return (
        <div className="content-wrapper iframe-mode bg-dark" data-widget="iframe" data-auto-dark-mode="true" data-loading-screen="750">
            <div className="nav navbar navbar-expand-lg navbar-dark border-bottom border-dark p-0">
                <Link className="nav-link bg-danger" to={{}} data-widget="iframe-close">Close</Link>
                <Link className="nav-link bg-dark" to={{}} data-widget="iframe-scrollleft"><i className="fas fa-angle-double-left"></i></Link>
                <ul className="navbar-nav" role="tablist">
                </ul>
                <Link className="nav-link bg-dark" to={{}} data-widget="iframe-scrollright"><i className="fas fa-angle-double-right"></i></Link>
                <Link className="nav-link bg-dark" to={{}} data-widget="iframe-fullscreen"><i className="fas fa-expand"></i></Link>
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

export default IframeDark