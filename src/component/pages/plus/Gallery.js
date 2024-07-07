import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'filterizr';
import 'ekko-lightbox';

function Gallery() {
  useEffect(() => {
    // Initialize Filterizr
    $('.filter-container').filterizr();

    // Initialize Ekko Lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

  }, []);
  const images = [
    {
      src: 'https://via.placeholder.com/1200/FFFFFF.png?text=1',
      category: '1',
      sort: 'white sample'
    },
    {
      src: 'https://via.placeholder.com/1200/000000.png?text=2',
      category: '2, 4',
      sort: 'black sample'
    },
    {
      src: 'https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=3',
      category: '3, 4',
      sort: 'red sample'
    },
    // Add more images here
  ];
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Gallery</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={{}}>Home</Link></li>
                <li className="breadcrumb-item active">Gallery</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="btn-group">
            <button className="btn btn-primary" data-filter="all">All</button>
            <button className="btn btn-primary" data-filter="1">Category 1</button>
            <button className="btn btn-primary" data-filter="2,4">Category 2,4</button>
            <button className="btn btn-primary" data-filter="3,4">Category 3,4</button>
          </div>
        </div>
      </div>
      <div className="row filter-container">
        {images.map((image, index) => (
          <div className={`col-md-4 mb-3 filtr-item`} data-category={image.category} data-sort={image.sort} key={index}>
            <a href={image.src} data-toggle="lightbox" data-gallery="gallery">
              <img src={image.src.replace('/1200/', '/300/')} className="img-fluid" alt={`sample ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
      {/* <!-- /.content --> */}
    </div>)
}

export default Gallery