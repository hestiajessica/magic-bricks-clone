import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  // Step 1: Store filters in state
  const [bhk, setBhk] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const navigate = useNavigate();

  // Step 2: When user clicks search
  const handleSearch = () => {
    // Step 3: Send filter data to properties page
    navigate("/properties", { 
      state: { bhk, minPrice, maxPrice }
    });
  };

  return (
    <div>
      <h2>Search Flats</h2>

      <select onChange={(e) => setBhk(e.target.value)}>
        <option value="">Select BHK</option>
        <option value="1">1 BHK</option>
        <option value="2">2 BHK</option>
        <option value="3">3 BHK</option>
      </select>

      <input type="number" placeholder="Min Price" onChange={(e) => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;
