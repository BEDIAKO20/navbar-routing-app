import React from 'react'
import {  Carousel } from 'react-bootstrap'
// import './App.css';
import '../Slide/Slide.css'

import pexelssora from '../../image/pexelssora.jpg';
import pexelskelly from '../../image/pexels-kelly-2950003.jpg'
 import pexelsnataliya from '../../image/pexels-nataliya-vaitkevich-6214388.jpg'

function Slide() {

  const myslide ={
    height: "400px"
  }
   
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={myslide}
          src={pexelssora}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>  
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={myslide}
          src={pexelskelly}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={myslide}
          src={pexelsnataliya}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Slide