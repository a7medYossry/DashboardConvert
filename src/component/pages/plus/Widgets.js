import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../UI/card/Card'
import DirectChatCard from '../mainpages/index/DirectChatCard'
import BackToTopBtn from '../UI/BackToTopBtn'

function Widgets() {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Widgets</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to='#'>Home</Link></li>
                <li className="breadcrumb-item active">Widgets</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <section className="content">
        <div className="container-fluid">
          <h5 className="mb-2">Info Box</h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-info"><i className="far fa-envelope"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Messages</span>
                  <span className="info-box-number">1,410</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-success"><i className="far fa-flag"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">410</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-warning"><i className="far fa-copy"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Uploads</span>
                  <span className="info-box-number">13,648</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-danger"><i className="far fa-star"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">93,139</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h5 className="mb-2">Info Box With Custom Shadows <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow-none">
                <span className="info-box-icon bg-info"><i className="far fa-envelope"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">None</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow-sm">
                <span className="info-box-icon bg-success"><i className="far fa-flag"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">Small</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow">
                <span className="info-box-icon bg-warning"><i className="far fa-copy"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">Regular</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow-lg">
                <span className="info-box-icon bg-danger"><i className="far fa-star"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">Large</span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h5 className="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-info">
                <span className="info-box-icon"><i className="far fa-bookmark"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-success">
                <span className="info-box-icon"><i className="far fa-thumbs-up"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-warning">
                <span className="info-box-icon"><i className="far fa-calendar-alt"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Events</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-danger">
                <span className="info-box-icon"><i className="fas fa-comments"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Comments</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h5 className="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-gradient-info">
                <span className="info-box-icon"><i className="far fa-bookmark"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-gradient-success">
                <span className="info-box-icon"><i className="far fa-thumbs-up"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-gradient-warning">
                <span className="info-box-icon"><i className="far fa-calendar-alt"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Events</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box bg-gradient-danger">
                <span className="info-box-icon"><i className="fas fa-comments"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Comments</span>
                  <span className="info-box-number">41,410</span>

                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
                {/* <!-- /.info-box-content --> */}
              </div>
              {/* <!-- /.info-box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}

          {/* <!-- Small Box (Stat card) --> */}
          <h5 className="mb-2 mt-4">Small Box</h5>
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* <!-- small card --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>

                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <Link to='#' className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- small card --> */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <Link to='#' className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- small card --> */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>

                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <Link to='#' className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- small card --> */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>

                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <Link to='#' className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- Small Box (Stat card) --> */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* <!-- small card --> */}
              <div className="small-box bg-info">
                {/* <!-- Loading (remove the following to stop the loading)--> */}
                <div className="overlay">
                  <i className="fas fa-3x fa-sync-alt"></i>
                </div>
                {/* <!-- end loading --> */}
                <div className="inner">
                  <h3>150</h3>

                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <Link to='#' className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- small card --> */}
              <div className="small-box bg-success">
                {/* <!-- Loading (remove the following to stop the loading)--> */}
                <div className="overlay dark">
                  <i className="fas fa-3x fa-sync-alt"></i>
                </div>
                {/* <!-- end loading --> */}
                <div className="inner">
                  <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <Link to='#' className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h4 className="mb-2 mt-4">Cards</h4>
          <h5 className="mb-2">Abilities</h5>
          <div className="row">
            <div className="col-md-3">
              <Card name='Expandable' color='card-primary' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Collapsable' color='card-success' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Removable' color='card-warning' btnCollapseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Maximizable' btnstyle='d-none' btnMaxinizeStyle='show-maximize' color='card-danger'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-3">
              <Card name='Card Refresh' btnRefreshStyle='showRefresh' color='card-primary'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
              <div className="d-none" id="card-refresh-content">
                The body of the card after card refresh
              </div>
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='All together' btnRefreshStyle='showRefresh' btnMaxinizeStyle='showMax' color='card-success'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Loading state' refreshDisplay='show' btnstyle='d-none' color='card-warning'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Loading state (dark)' btnstyle='d-none' color='card-danger' overlayColor='dark' refreshDisplay='show'>
                The body of the card jlkjlkjkl
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h5 className="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
          <div className="row">
            <div className="col-md-3">
              <Card name='Shadow - None' color='card-primary shadow-none' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Shadow - Small' color='card-success shadow-sm' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Shadow - Regular' color='card-warning shadow' btnCollapseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Shadow - Large' color='card-danger shadow-lg' btnstyle='d-none' btnMaxinizeStyle='showMaX'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}

          <h5 className="mb-2">Colors Variations</h5>

          <div className="row">
            <div className="col-md-3">
              <Card name='Primary' color='card-primary' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Success' color='card-success' btnCollapseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Warning' color='card-warning' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Danger' color='card-danger' btnstyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-3">
              <Card name='Primary Outline' color='card-primary card-outline ' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Success Outline' color='card-success card-outline ' btnCollapseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Warning Outline' color='card-warning card-outline ' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Danger Outline' color='card-danger card-outline ' btnstyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-3">
              <Card name='Primary' color='bg-primary' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Success' color='bg-success' btnCollapseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Warning' color='bg-warning' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Danger' color='bg-danger' btnstyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-3">
              <Card name='Primary Gradient' color='bg-gradient-primary' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Success Gradient' color='bg-gradient-success' btnCollapseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Warning Gradient' color='bg-gradient-warning' btnCloseStyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-3">
              <Card name='Danger Gradient' color='bg-gradient-danger' btnstyle='d-none'>
                The body of the card
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}

          {/* <!-- Direct Chat --> */}
          <h4 className="mt-4 mb-2">Direct Chat</h4>
          <div className="row">
            <div className="col-md-3">
              {/* <!-- DIRECT CHAT PRIMARY --> */}
              <DirectChatCard color='direct-chat-primary card-primary card-outline' badgeColor='bg-primary' btnSendColor='bg-primary' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-3">
              {/* <!-- DIRECT CHAT SUCCESS --> */}
              <DirectChatCard color='direct-chat-success card-success card-outline' badgeColor='bg-success' btnSendColor='bg-success' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-3">
              {/* <!-- DIRECT CHAT WARNING --> */}
              <DirectChatCard color='direct-chat-warning card-warning ' badgeColor='bg-danger' btnSendColor='bg-warning' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-3">
              {/* <!-- DIRECT CHAT DANGER --> */}
              <DirectChatCard color='direct-chat-danger card-danger ' badgeColor='bg-danger' btnSendColor='bg-danger' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h5 className="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
          <div className="row">
            <div className="col-md-3">
              {/* <!-- DIRECT CHAT PRIMARY --> */}
              <DirectChatCard name='Shadow - None' color=' card-primary card-outline  direct-chat-primary shadow-none' badgeColor='bg-primary' btnSendColor='bg-primary' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-3">
              {/* <!-- DIRECT CHAT SUCCESS --> */}
              <DirectChatCard name='Shadow - Small' color=' card-success card-outline  direct-chat-success shadow-sm' badgeColor='bg-success' btnSendColor='bg-success' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-3">
              {/* <!-- DIRECT CHAT WARNING --> */}
              <DirectChatCard name='Shadow - Regular' color=' card-warning  direct-chat-warning shadow' badgeColor='bg-danger' btnSendColor='bg-warning' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-3">
              {/* <!-- DIRECT CHAT DANGER --> */}
              <DirectChatCard name='Shadow - Large' color=' card-danger  direct-chat-danger shadow-lg' badgeColor='bg-danger' btnSendColor='bg-danger' />
              {/* <!--/.direct-chat --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <h3 className="mt-4 mb-4">Social Widgets</h3>

          <div className="row">
            <div className="col-md-4">
              {/* <!-- Widget: user widget style 2 --> */}
              <div className="card card-widget widget-user-2">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div className="widget-user-header bg-warning">
                  <div className="widget-user-image">
                    <img className="img-circle elevation-2" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
                  </div>
                  {/* <!-- /.widget-user-image --> */}
                  <h3 className="widget-user-username">Nadia Carmichael</h3>
                  <h5 className="widget-user-desc">Lead Developer</h5>
                </div>
                <div className="card-footer p-0">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Projects <span className="float-right badge bg-primary">31</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Tasks <span className="float-right badge bg-info">5</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Completed Projects <span className="float-right badge bg-success">12</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Followers <span className="float-right badge bg-danger">842</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /.widget-user --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-4">
              {/* <!-- Widget: user widget style 1 --> */}
              <div className="card card-widget widget-user">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div className="widget-user-header bg-info">
                  <h3 className="widget-user-username">Alexander Pierce</h3>
                  <h5 className="widget-user-desc">Founder & CEO</h5>
                </div>
                <div className="widget-user-image">
                  <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">3,200</h5>
                        <span className="description-text">SALES</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">13,000</h5>
                        <span className="description-text">FOLLOWERS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4">
                      <div className="description-block">
                        <h5 className="description-header">35</h5>
                        <span className="description-text">PRODUCTS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
              </div>
              {/* <!-- /.widget-user --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-4">
              {/* <!-- Widget: user widget style 1 --> */}
              <div className="card card-widget widget-user">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div className="widget-user-header text-white"
                  style={{ background: "url('../dist/img/photo1.png') center center" }}>
                  <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                  <h5 className="widget-user-desc text-right">Web Designer</h5>
                </div>
                <div className="widget-user-image">
                  <img className="img-circle" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">3,200</h5>
                        <span className="description-text">SALES</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">13,000</h5>
                        <span className="description-text">FOLLOWERS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4">
                      <div className="description-block">
                        <h5 className="description-header">35</h5>
                        <span className="description-text">PRODUCTS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
              </div>
              {/* <!-- /.widget-user --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-6">
              {/* <!-- Box Comment --> */}
              <Card bfName={
                <>
                  <div className="user-block">
                    <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User " />
                    <span className="username"><Link to='#'>Jonathan Burke Jr.</Link></span>
                    <span className="description">Shared publicly - 7:30 PM Today</span>
                  </div>
                </>}
                befMinus={<button type="button" className="btn btn-tool" title="Mark as read">
                  <i className="far fa-circle"></i>
                </button>}
                footerOutBody={<>
                  <div className="card-footer card-comments">
                    <div className="card-comment">
                      {/* <!-- User image --> */}
                      <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User " />

                      <div className="comment-text">
                        <span className="username">
                          Maria Gonzales
                          <span className="text-muted float-right">8:03 PM Today</span>
                        </span>
                        {/* <!-- /.username --> */}
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                      {/* <!-- /.comment-text --> */}
                    </div>
                    {/* <!-- /.card-comment --> */}
                    <div className="card-comment">
                      {/* <!-- User image --> */}
                      <img className="img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="User " />

                      <div className="comment-text">
                        <span className="username">
                          Luna Stark
                          <span className="text-muted float-right">8:03 PM Today</span>
                        </span>
                        {/* <!-- /.username --> */}
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                      {/* <!-- /.comment-text --> */}
                    </div>
                    {/* <!-- /.card-comment --> */}
                  </div>
                  {/* <!-- /.card-footer --> */}
                  <div className="card-footer">
                    <form action='#' method="post">
                      <img className="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                      {/* <!-- .img-push is used to add margin to elements next to floating images --> */}
                      <div className="img-push">
                        <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                      </div>
                    </form>
                  </div>
                </>}>
                <img className="img-fluid pad" src="../dist/img/photo2.png" alt="noname" />

                <p>I took this photo this morning. What do you guys think?</p>
                <button type="button" className="btn btn-default btn-sm"><i className="fas fa-share"></i> Share</button>
                <button type="button" className="btn btn-default btn-sm"><i className="far fa-thumbs-up"></i> Like</button>
                <span className="float-right text-muted">127 likes - 3 comments</span>
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-6">
              {/* <!-- Box Comment --> */}
              <Card bfName={
                <>
                  <div className="user-block">
                    <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User " />
                    <span className="username"><Link to='#'>Jonathan Burke Jr.</Link></span>
                    <span className="description">Shared publicly - 7:30 PM Today</span>
                  </div>
                </>}
                befMinus={<button type="button" className="btn btn-tool" title="Mark as read">
                  <i className="far fa-circle"></i>
                </button>}
                footerOutBody={<>
                  <div className="card-footer card-comments">
                    <div className="card-comment">
                      {/* <!-- User image --> */}
                      <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User " />

                      <div className="comment-text">
                        <span className="username">
                          Maria Gonzales
                          <span className="text-muted float-right">8:03 PM Today</span>
                        </span>
                        {/* <!-- /.username --> */}
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                      {/* <!-- /.comment-text --> */}
                    </div>
                    {/* <!-- /.card-comment --> */}
                    <div className="card-comment">
                      {/* <!-- User image --> */}
                      <img className="img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="User " />

                      <div className="comment-text">
                        <span className="username">
                          Luna Stark
                          <span className="text-muted float-right">8:03 PM Today</span>
                        </span>
                        {/* <!-- /.username --> */}
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                      </div>
                      {/* <!-- /.comment-text --> */}
                    </div>
                    {/* <!-- /.card-comment --> */}
                  </div>
                  {/* <!-- /.card-footer --> */}
                  <div className="card-footer">
                    <form action='#' method="post">
                      <img className="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                      {/* <!-- .img-push is used to add margin to elements next to floating images --> */}
                      <div className="img-push">
                        <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                      </div>
                    </form>
                  </div>
                </>}>
                {/* <!-- post text --> */}
                <p>Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts. Separated they live in Bookmarksgrove right at</p>

                <p>the coast of the Semantics, a large language ocean.
                  A small river named Duden flows by their place and supplies
                  it with the necessary regelialia. It is a paradisematic
                  country, in which roasted parts of sentences fly into
                  your mouth.</p>

                {/* <!-- Attachment --> */}
                <div className="attachment-block clearfix">
                  <img className="attachment-img" src="../dist/img/photo1.png" alt="Attachment " />

                  <div className="attachment-pushed">
                    <h4 className="attachment-heading"><Link to="https://www.lipsum.com/">Lorem ipsum text generator</Link></h4>

                    <div className="attachment-text">
                      Description about the attachment can be placed here.
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry... <Link to='#'>more</Link>
                    </div>
                    {/* <!-- /.attachment-text --> */}
                  </div>
                  {/* <!-- /.attachment-pushed --> */}
                </div>
                {/* <!-- /.attachment-block --> */}

                {/* <!-- Social sharing buttons --> */}
                <button type="button" className="btn btn-default btn-sm"><i className="fas fa-share"></i> Share</button>
                <button type="button" className="btn btn-default btn-sm"><i className="far fa-thumbs-up"></i> Like</button>
                <span className="float-right text-muted">45 likes - 2 comments</span>
              </Card>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- =========================================================== --> */}
          <h5 className="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Widget: user widget style 2 --> */}
              <div className="card card-widget widget-user-2 shadow-sm">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div className="widget-user-header bg-warning">
                  <div className="widget-user-image">
                    <img className="img-circle elevation-2" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
                  </div>
                  {/* <!-- /.widget-user-image --> */}
                  <h3 className="widget-user-username">Nadia Carmichael</h3>
                  <h5 className="widget-user-desc">Lead Developer</h5>
                </div>
                <div className="card-footer p-0">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Projects <span className="float-right badge bg-primary">31</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Tasks <span className="float-right badge bg-info">5</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Completed Projects <span className="float-right badge bg-success">12</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='#' className="nav-link">
                        Followers <span className="float-right badge bg-danger">842</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /.widget-user --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-4">
              {/* <!-- Widget: user widget style 1 --> */}
              <div className="card card-widget widget-user shadow">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div className="widget-user-header bg-info">
                  <h3 className="widget-user-username">Alexander Pierce</h3>
                  <h5 className="widget-user-desc">Founder & CEO</h5>
                </div>
                <div className="widget-user-image">
                  <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">3,200</h5>
                        <span className="description-text">SALES</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">13,000</h5>
                        <span className="description-text">FOLLOWERS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4">
                      <div className="description-block">
                        <h5 className="description-header">35</h5>
                        <span className="description-text">PRODUCTS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
              </div>
              {/* <!-- /.widget-user --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-4">
              {/* <!-- Widget: user widget style 1 --> */}
              <div className="card card-widget widget-user shadow-lg">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div className="widget-user-header text-white"
                  style={{ background: "url('../dist/img/photo1.png') center center" }}>
                  <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                  <h5 className="widget-user-desc text-right">Web Designer</h5>
                </div>
                <div className="widget-user-image">
                  <img className="img-circle" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">3,200</h5>
                        <span className="description-text">SALES</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">13,000</h5>
                        <span className="description-text">FOLLOWERS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-4">
                      <div className="description-block">
                        <h5 className="description-header">35</h5>
                        <span className="description-text">PRODUCTS</span>
                      </div>
                      {/* <!-- /.description-block --> */}
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
              </div>
              {/* <!-- /.widget-user --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <h5 className="mb-2">Card with Image Overlay</h5>
          <div className="card card-success">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-4">
                  <div className="card mb-2 bg-gradient-dark">
                    <img className="card-img-top" src="../dist/img/photo1.png" alt="Dist  1" />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title text-primary text-white">Card Title</h5>
                      <p className="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                      <Link to='#' className="text-white">Last update 2 mins ago</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                  <div className="card mb-2">
                    <img className="card-img-top" src="../dist/img/photo2.png" alt="Dist  2" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                      <h5 className="card-title text-white mt-5 pt-2">Card Title</h5>
                      <p className="card-text pb-2 pt-1 text-white">
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipisicing elit <br />
                        sed do eiusmod tempor.
                      </p>
                      <Link to='#' className="text-white">Last update 15 hours ago</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                  <div className="card mb-2">
                    <img className="card-img-top" src="../dist/img/photo3.jpg" alt="Dist  3" />
                    <div className="card-img-overlay">
                      <h5 className="card-title text-primary">Card Title</h5>
                      <p className="card-text pb-1 pt-1 text-white">
                        Lorem ipsum dolor <br />
                        sit amet, consectetur <br />
                        adipisicing elit sed <br />
                        do eiusmod tempor. </p>
                      <Link to='#' className="text-primary">Last update 3 days ago</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
      {/* <!-- /.content --> */}
      <BackToTopBtn/>
    </div>)
}

export default Widgets