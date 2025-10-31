import React from "react";
import { Link, useNavigate } from "react-router-dom"
import "./style.css"
import { IoIosArrowDown,IoIosSearch,IoIosHome } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import data from"./data[1].json"
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import BudgetWrapper from "./budgetwrapper";

let Home=()=>{
 const Option = ["Flat", "Villa", "Independent House"];
  const bhk = ["1 Bhk", "2 Bhk", "3 Bhk", "4 Bhk", "5 Bhk"];
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState([]);     // keep as array
  const [selectedBhk, setSelectedBhk] = useState([]); // array for BHK
    const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(""); 
  const [location,setLocation]=useState("chennai");
  

  const handleSelect = (option) => {
    // toggle in array (multi-select). If you want single-select, use: setSelected([option])
    setSelected(prev =>
      prev.includes(option) ? prev.filter(x => x !== option) : [...prev, option]
    );
  };

  const handleBhkSelect = (b) => {
    setSelectedBhk(prev =>
      prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]
    );
  };

  const getButtonLabel = () => {
    if (selected.length === 0) return "Property Type";
    if (selected.length === 1) return selected[0];
    return `${selected[0]} +${selected.length - 1}`;
  };

  // debugging helper (remove in production)
  // console.log("selected:", selected, "selectedBhk:", selectedBhk, "visible:", visible);
let navigate=useNavigate();
let handleclick=()=>{
const typeParam = selected.length > 0 ? selected.join(",") : "";
navigate(
  `/properties?location=${encodeURIComponent(location)}&type=${encodeURIComponent(typeParam)}&min=${encodeURIComponent(minPrice)}&max=${encodeURIComponent(maxPrice)}`
);


}
let Change=(event)=>{
  setLocation(event.target.value)
  console.log("Location selected:", event.target.value);
}


    return(
        <div>
       
            <div className="homw">
                <div className="left">
                <span className="mg">magicbricks </span>
                   <p >Chennai </p><IoIosArrowDown />
              </div>
           <div className="right">
           <p >MB price</p>
            <p >Login</p>
               <div className="pp">
               Post Property
               <span>FREE</span>
                </div>
            </div>
            </div>
          <div className="cls">
         < span className="nav-item1">Buy</span>
  <span className="nav-item">Rent<IoIosArrowDown /></span>
  <span className="nav-item">Sell<IoIosArrowDown /></span>
  <span className="nav-item">Home Interiors<IoIosArrowDown /></span>
  <span className="nav-item">MB Advice<IoIosArrowDown /></span>
  <span className="nav-item">Help<IoIosArrowDown /></span>
          </div>
           <div className="na" >
          <section id="Search" >
           <div className="search">
          
            <h2>Welcome back, Start your #PataBadloLifeBadlo Journey</h2>
            <div className="enamo">
              <Link className="buy-red">buy</Link>
              <Link className="navigate-down">Rent</Link>
              <Link className="navigate-down">New project</Link>
              <Link className="navigate-down">PG</Link>
              <Link className="navigate-down">Plot</Link>
              <Link className="navigate-down">Commercial</Link>
              <Link className="navigate-down">Post Free Ptoerty Add</Link>
              </div>
              <div className="sort">
                <CiLocationOn className="ind-loc" />
                <input placeholder="Enter City,Locality,Project" onChange={(event)=>Change(event)}/><span className="dum">|</span>
                <IoIosHome className="location-icon" />
              <div className="dropdown1">
  <div className="dropdown">
        <p
          type="button"
          className="su"
          onClick={() => setVisible(v => !v)}
        >
          {getButtonLabel()}
        </p>

        {visible && (
          <div className="dd">
            {/* residential section */}
            <div style={{ marginBottom: 8, fontWeight: 600, color: "#444" }}>
              Residential
            </div>

            <div className="pills">
              {Option.map(opt => (
                <p
                  key={opt}
                  type="button"
                  className={`pill ${selected.includes(opt) ? "active" : ""}`}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </p>
              ))}
            </div>

            {/* BHK only visible if Flat or Independent House selected */}
            {(selected.includes("Flat") || selected.includes("Independent House")) && (
              <>
                <div style={{ marginTop: 12, marginBottom: 6, fontWeight: 600 }}>
                  ️Select BHK
                </div>
                <div className="pills">
                  {bhk.map(b => (
                    <p
                      key={b}
                      type="button"
                      className={`pill ${selectedBhk.includes(b) ? "active" : ""}`}
                      onClick={() => handleBhkSelect(b)}
                    >
                      {b}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    
</div>

                <TbCoinRupeeFilled className="location-icon"/>
                <BudgetWrapper
  minPrice={minPrice}
  maxPrice={maxPrice}
  setMinPrice={setMinPrice}
  setMaxPrice={setMaxPrice}
/>
                <button className="buttn" onClick={handleclick}>Search <IoIosSearch style={{color:"white"}} /></button>
              </div>
              </div>
              </section>

              <section id="searched">
                <h2>Because you searched Chennai</h2>
                <div className="box">
                <div className="txt">
                  <nav>
                  <p  ><span className="highlight">15+</span> properties listed for you</p>
                  <p className="tt">Countinue last search<FaLongArrowAltRight /></p>
                  </nav>
                </div>
                <div className="txt" >
                  <nav>
                  <p >Get personalised property recommendations for you</p>
                  <p className="tt">See all<FaLongArrowAltRight /></p>
                  </nav>
                </div>
                <div className="txt" >
                  <nav>
                  <p >Top Handpicked Projects for you</p>
                  <p className="tt">See all<FaLongArrowAltRight /></p>
                  </nav>
                </div>
                <div className="txt">
                  <nav>
                  <p >Top Exclusive Owner Properties</p>
                      <p className="tt">See all<FaLongArrowAltRight /></p>
                  </nav>
                </div>
             </div>
              </section>
              
              <section id="perty">
               <div className="pro">
                <div className="head">
                   <h2>Popular Owner Properties</h2>
                
 
                <Link to="/properties">See all Properties <FaLongArrowAltRight /></Link>
                </div>
          <Slider
      infinite={true}
      speed={500}
      slidesToShow={4}
      slidesToScroll={1}
      arrows={true}
       responsive={[
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600, // below 600px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]}
    >
               {data.home.map((e, i) => {
  const getImageUrl = (path) => {
    try {
      return new URL(`./${path}`, import.meta.url).href;
    } catch {
      console.error("Image not found:", path);
      return ""; // fallback to blank if missing
    }
  };

  return (
    <div key={i} className="card" onClick={()=>navigate("/properties")}>
   
      <img
  src={e.images[0]}
  alt="not found"
  className="im"
/>

      <p>{e.title}</p>
      <h4>{e.price} | {e.area}</h4>
      <p>{e.location}</p>
      <button className="view-btn">View Details</button>
    </div>
  );
})}
  </Slider> 
               </div>
                
              </section>
          
              <section id="poster"  >   
              <div className="post-content">
                      <h2>
                        Post your Property for <span className="free-text">Free</span>
                      </h2>
                      <p>List it on Magicbricks and get genuine leads</p>
                  </div>
                       <button className="post-btn-below">Post Property <span className="free-btn"> FREE</span></button>
                </section>
        </div> 
        <section id="footer">
          <div className="footer-container">

                    <div className="left-side">
                      <div className="footer-about">
                        <h3>Magic Bricks</h3>
                        <p>Magicbricks is a full stack service provider for all real estate needs...</p>
                      </div>
                      <div class="footer-network">
                            <h3>More from our Network</h3>
                            <p>
                              Times of India | Economic Times | Navbharat Times | India Times | Filmfare | MensXP | iDiva | TimesJobs | Gadgets Now
                            </p>
                          </div>
                          <div class="footer-social">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                  alt="Get it on Google Play"
                                  style={{ height: "45px", marginRight: "10px" }}
                                />
                              </a>
                          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                  <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    style={{ height: "45px" }}
                                  />
                                  </a>
                                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle facebook">
                                <i className="bi bi-facebook"></i>
                              </a>
                              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle twitter">
                                <i className="bi bi-twitter"></i>
                              </a>
                              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle linkedin">
                                <i className="bi bi-linkedin"></i>
                              </a>
                              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle youtube">
                                <i className="bi bi-youtube"></i>
                              </a>
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle instagram">
                                <i className="bi bi-instagram"></i>
                              </a>
                                      
                                   
                            </div>
                    </div>
                     <div className="footer-right">
                          <div className="footer-links">
                            <h3>Properties in India</h3>
                            <p>
                              Property in New Delhi | Property in Mumbai | Property in Chennai |
                              Property in Pune | Property in Noida | Property in Gurgaon |
                              Property in Bangalore | Property in Ahmedabad
                            </p>
                          </div>
                     <div className="footer-links">
                        <h3>New Projects in India</h3>
                        <p>
                          New Projects in New Delhi | New Projects in Mumbai |
                          New Projects in Chennai | New Projects in Pune |
                          New Projects in Noida | New Projects in Gurgaon |
                          New Projects in Bangalore | New Projects in Ahmedabad
                        </p>
                      </div>
                    </div>
                    </div>

</section>
        </div>
       
    )
}
export default Home;