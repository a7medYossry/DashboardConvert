import React from 'react'

function Card({children,name='',color=''}) {
    return (
        <div className={`card ${color} collapsing-card` }>
            <div className="card-header">
                <h3 className="card-title">{name}</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="chart ">
                {children}
                </div>
            </div>
            {/* <!-- /.card-body --> */}
        </div>
        )
}

export default Card