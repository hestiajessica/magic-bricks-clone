import React, { useState } from "react";
import data from "./data[1].json";
import "./contact.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const dat=data.details;

  // Taking the first property for display (you can change the index)
  const location = useLocation();
const property = location.state?.property; // Get the clicked property
const images = property?.images || []; // Fallback if no data
console.log(images);
  return (
    <div>
      {/* Navbar */}
      <div className="boxz">
        <div className="box-header-left">
          <span className="logo">magicbricks</span>
          <span>Buy</span>
          <span>Rent</span>
          <span>Sell</span>
          <span>Home Loan</span>
        </div>
        <div className="box-header-right">
          <span>Login</span>
          <span>
            Post Property <span>Free</span>
          </span>
        </div>
      </div>

  <div className="contact-container">
  <div className="con-left">
    {data.details.map((i) => {
      if (i.id === property.id) {
        return (
          <div key={i.id}>
            <p>{i.price}</p>
<p>{i.area} {i.type} {i.propertytype} sale in {i.location}</p>
            {/* Main Image Slider */}
            <Slider
              asNavFor={nav2}
              ref={setNav1}
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              dots={false}
            >
              {i.images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Property ${index}`}
                    className="property-image"
                  />
                </div>
              ))}
            </Slider>

            {/* Thumbnail Slider */}
            <Slider
              asNavFor={nav1}
              ref={setNav2}
              slidesToShow={i.images.length >= 4 ? 4 : i.images.length}
              swipeToSlide
              focusOnSelect
              arrows={false}
              centerMode={false}
            >
              {i.images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </Slider>
            <div>
              <h4>Furnish</h4>
              <p>{i.furnish}</p>
             <h4>Floor</h4>
             <p>{i.floor}</p>
             <h4>ownership</h4>
             <p>{i.ownership}</p>
             <h4>overlooking</h4>
             <p>{i.overlooking}</p>
            </div>
            <div className="btn-sec">
              <button>Contact Owner</button>
              <button>Ask Socity</button>
              </div>
              <div className="desc">
                <h2>More Details</h2>
                <h4>Address</h4>
                <p>{i.address}</p>
                <h4>landmark</h4>
                <p>{i.landmark}</p>
                <h4>Description</h4>
                <p>{i.Description}</p>
                </div>
          </div>
          
        );
      }
      return null;
    })}
  </div>
</div>

      
     
     
     
     
      </div>
)
};

export default Contact;
