import React, { Component } from 'react'
import '../App.css';


export default class Home extends Component {
  render() {
    return (
      <div>
<section id="showcase">
<div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item carousel-image-1 active">
      <div className="container">
      </div>
    </div>

    <div className="carousel-item carousel-image-2">
      <div className="container">
        
      </div>
    </div>

    <div className="carousel-item carousel-image-3">
      <div className="container">
        
      </div>
    </div>
  </div>

  <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
    <span className="carousel-control-prev-icon"></span>
  </a>

  <a href="#myCarousel" data-slide="next" className="carousel-control-next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
</section>

<section id="homeicons" className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4 text-center">
          <i className="fas fa-cog fa-3x mb-2"></i>
          <h3>Mobile Feature</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <i className="fas fa-cloud fa-3x mb-2"></i>
          <h3>Sending Data</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <i className="fas fa-cart-plus  fa-3x mb-2"></i>
          <h3>Add Mobile</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam</p>
        </div>
      </div>
    </div>
  </section> 


      </div>
    )
  }
}
