import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Footer = () => {
    const textSmFooter=useSelector(state => state.bodyState.textSmFooter)

    return (
        <> <footer className={`main-footer ${textSmFooter}`}>
            <strong>Copyright &copy; 2014-2021 <Link to="/https://adminlte.io">AdminLTE.io</Link>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.2.0
            </div>
        </footer>
        </>
    )
}

export default Footer