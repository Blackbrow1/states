import React from 'react'
import PropTypes from 'prop-types'
import './ProjectList.css';

function ProjectList(props) {
  const images = [{
    img: "img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "img/200.jpg",
    category: "Websites"
  }, {
    img: "img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "img/place200x290.png",
    category: "Websites"
  }, {
    img: "img/200.jpg",
    category: "Websites"
  }, {
    img: "img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "img/place200x290_3.png",
    category: "Flayers"
  }]

  
  return (
    <ul className="img-container">
      {images.map((item, j) => {
      return (
        <li className="img-item">
          <img src={item.img} id={j} alt={item.category} />
        </li>
      );
    })}
    </ul>
        
    
  
    //<ul>
    //   <li>
    //     <img src="img/dia.jpg" alt="" />
    //   </li>
    // </ul>
  );
}

ProjectList.propTypes = {}

export default ProjectList;
