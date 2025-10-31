import React from "react";
import data from "./data[1].json";
import "./proper.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { IoIosArrowDown} from "react-icons/io";

const Properties = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();

  const location = decodeURIComponent(searchParams.get("location") || "");
  const type = decodeURIComponent(searchParams.get("type") || "");
  const min = decodeURIComponent(searchParams.get("min") || "");
  const max = decodeURIComponent(searchParams.get("max") || "");
  const bhk = decodeURIComponent(searchParams.get("bhk") || "");

  // ✅ Convert prices like "₹75 Lac" or "₹1 Cr" → numeric rupee values
  const parsePrice = (priceString) => {
    if (!priceString || typeof priceString !== "string") return 0;

    const clean = priceString.replace(/[^\d.]/g, "");
    const num = parseFloat(clean);
    if (isNaN(num)) return 0;

    const lower = priceString.toLowerCase();
    if (lower.includes("crore")) return num * 10000000; // 1 Cr = 10,000,000 rupees
    if (lower.includes("lakh")) return num * 100000;    // 1 Lakh = 100,000 rupees

    return num; // If already in rupees
  };

  // ✅ Filter properties based on URL params
  const filtered = data.details.filter((item) => {
    const itemPrice = parsePrice(item.price);
    const minPrice = parseFloat(min) || 0;
    const maxPrice = parseFloat(max) || 0;

    const matchLocation = location
      ? item.location.toLowerCase().includes(location.toLowerCase())
      : true;

     const matchType = type
    ? item.propertytype?.toLowerCase().includes(type.toLowerCase())
    : true;
    const matchBHK = bhk
      ? item.bhk?.toLowerCase().includes(bhk.toLowerCase())
      : true;


    const matchBudget =
      (!minPrice || itemPrice >= minPrice) &&
      (!maxPrice || itemPrice <= maxPrice);

    return matchLocation && matchType && matchBudget;
  });

 const naviga = (property) => {
  nav("/contact", { state: { property } });
};

  // Debugging info (you can remove later)
  console.log("Min:", min, "| Parsed:", parsePrice(min));
  console.log("Max:", max, "| Parsed:", parsePrice(max));
console.log(type);

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="header-left">
          <h1>Magic Bricks</h1>
          <p>Buy</p>
          <p>Rent</p>
          <p>Sell</p>
          <p>Home Loans</p>
        </div>
        <div className="header-right">
          <p>Login</p>
          <p>Shortlist</p>
          <p>
            Post <span>Free</span>
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-bar">
        <div className="search-bar-main">
          <span style={{display:"flex",alignItems:"center"}}>Buy   <IoIosArrowDown /></span>
          |
          <button className="search-city">{location}</button>
          <input type="text" placeholder="Add More" style={{outline:"none"}} />
        </div>

        <div className="search-filters">
          <span>Top Localities</span>
         <span>{min}-{max} price</span>
          <span>type {type}</span>
          <span>BHK {bhk}</span>
          <span>Posted By</span>
          <span>More Filters</span>
        </div>
      </div>

      {/* Properties Section */}
      <section id="property-list">
  <div className="property-cards">
   {filtered.length > 0 ? (
  filtered.map((e) => (
    <div
      className="property-card"
      key={e.id}
      onClick={() => naviga(e)}   // ✅ fixed
    >
      <div className="image-box">
        <img src={e.images[0]} alt="property" />
        <p className="ownership">{e.ownership}</p>
      </div>

      <div className="property-info">
        <h4>{e.title}</h4>
        <div className="unique">
          <p><strong>Area:</strong> {e.area}</p>
          <p><strong>Floor:</strong> {e.floor}</p>
          <p><strong>Price:</strong> {e.price}</p>
        </div>
      </div>

      <div className="buttons">
        <h4>{e.price}</h4>
        <button className="contact-btn">Contact Owner</button>
        <button className="check-btn">Check Availability</button>
      </div>
    </div>
  ))
) : (
  <p>No properties match your criteria.</p>
)}

  </div>
</section>
    </div>
  );
};

export default Properties;
