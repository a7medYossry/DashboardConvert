import React from 'react'
import { Link } from 'react-router-dom'

function TimeLine() {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Timeline</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                <li className="breadcrumb-item active">Timeline</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <section className="content">
        <div className="container-fluid">

          {/* <!-- Timelime example  --> */}
          <div className="row">
            <div className="col-md-12">
              {/* <!-- The time line --> */}
              <div className="timeline">
                {/* <!-- timeline time label --> */}
                <div className="time-label">
                  <span className="bg-red">10 Feb. 2014</span>
                </div>
                {/* <!-- /.timeline-label --> */}
                {/* <!-- timeline item --> */}
                <div>
                  <i className="fas fa-envelope bg-blue"></i>
                  <div className="timeline-item">
                    <span className="time"><i className="fas fa-clock"></i> 12:05</span>
                    <h3 className="timeline-header"><Link to={{}}>Support Team</Link> sent you an email</h3>

                    <div className="timeline-body">
                      Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                      weebly ning heekya handango imeem plugg dopplr jibjab, movity
                      jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                      quora plaxo ideeli hulu weebly balihoo...
                    </div>
                    <div className="timeline-footer">
                      <Link to={{}} className="btn btn-primary btn-sm">Read more</Link>
                      <Link to={{}} className="btn btn-danger btn-sm">Delete</Link>
                    </div>
                  </div>
                </div>
                {/* <!-- END timeline item --> */}
                {/* <!-- timeline item --> */}
                <div>
                  <i className="fas fa-user bg-green"></i>
                  <div className="timeline-item">
                    <span className="time"><i className="fas fa-clock"></i> 5 mins ago</span>
                    <h3 className="timeline-header no-border"><Link to={{}}>Sarah Young</Link> accepted your friend request</h3>
                  </div>
                </div>
                {/* <!-- END timeline item --> */}
                {/* <!-- timeline item --> */}
                <div>
                  <i className="fas fa-comments bg-yellow"></i>
                  <div className="timeline-item">
                    <span className="time"><i className="fas fa-clock"></i> 27 mins ago</span>
                    <h3 className="timeline-header"><Link to={{}}>Jay White</Link> commented on your post</h3>
                    <div className="timeline-body">
                      Take me to your leader!
                      Switzerland is small and neutral!
                      We are more like Germany, ambitious and misunderstood!
                    </div>
                    <div className="timeline-footer">
                      <Link to={{}} className="btn btn-warning btn-sm">View comment</Link>
                    </div>
                  </div>
                </div>
                {/* <!-- END timeline item --> */}
                {/* <!-- timeline time label --> */}
                <div className="time-label">
                  <span className="bg-green">3 Jan. 2014</span>
                </div>
                {/* <!-- /.timeline-label --> */}
                {/* <!-- timeline item --> */}
                <div>
                  <i className="fa fa-camera bg-purple"></i>
                  <div className="timeline-item">
                    <span className="time"><i className="fas fa-clock"></i> 2 days ago</span>
                    <h3 className="timeline-header"><Link to={{}}>Mina Lee</Link> uploaded new photos</h3>
                    <div className="timeline-body">
                      <img src="https://placehold.it/150x100" alt="..." />
                      <img src="https://placehold.it/150x100" alt="..." />
                      <img src="https://placehold.it/150x100" alt="..." />
                      <img src="https://placehold.it/150x100" alt="..." />
                      <img src="https://placehold.it/150x100" alt="..." />
                    </div>
                  </div>
                </div>
                {/* <!-- END timeline item --> */}
                {/* <!-- timeline item --> */}
                <div>
                  <i className="fas fa-video bg-maroon"></i>

                  <div className="timeline-item">
                    <span className="time"><i className="fas fa-clock"></i> 5 days ago</span>

                    <h3 className="timeline-header"><Link to={{}}>Mr. Doe</Link> shared a video</h3>

                    <div className="timeline-body">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" title='youtube-frame' src="https://www.youtube.com/embed/tMWkeBIohBs" allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="timeline-footer">
                      <Link to={{}} className="btn btn-sm bg-maroon">See comments</Link>
                    </div>
                  </div>
                </div>
                {/* <!-- END timeline item --> */}
                <div>
                  <i className="fas fa-clock bg-gray"></i>
                </div>
              </div>
            </div>
            {/* <!-- /.col --> */}
          </div>
        </div>
        {/* <!-- /.timeline --> */}

      </section>
      {/* <!-- /.content --> */}
    </div>)
}

export default TimeLine