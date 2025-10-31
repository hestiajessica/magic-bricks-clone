import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css"; // or "./BudgetWrapper.css" if you put the CSS in a separate file

const MIN_OPTIONS = [
  "₹5 Lac", "₹10 Lac", "₹20 Lac", "₹30 Lac",
  "₹40 Lac", "₹50 Lac", "₹60 Lac", "₹1 Cr"
];
const MAX_OPTIONS = [
  "₹10 Lac", "₹20 Lac", "₹30 Lac", "₹40 Lac",
  "₹50 Lac", "₹60 Lac", "₹1 Cr", "₹2 Cr"
];

export default function BudgetWrapper({ minPrice, maxPrice, setMinPrice, setMaxPrice }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside or pressing Esc
  useEffect(() => {
    const handleDocClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const label = () => {
    if (minPrice || maxPrice) return `: ${minPrice || "Any"} - ${maxPrice || "Any"}`;
    return "";
  };

  return (
    <div className="budget-wrapper" ref={wrapperRef}>
      <p
        type="button"
        className="budget-btn"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-controls="budget-dropdown"
      >
        Budget {label()}
      </p>

      <div
        id="budget-dropdown"
        className={`budget-dropdown ${open ? "active" : ""}`}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="price-container">
          <div className="price-column">
            <div className="price-title">Min Price</div>
            <ul>
              {MIN_OPTIONS.map((p) => (
                <li
                  key={p}
                  className={minPrice === p ? "active" : ""}
                  onClick={() => setMinPrice(p)}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="price-column">
            <div className="price-title">Max Price</div>
            <ul>
              {MAX_OPTIONS.map((p) => (
                <li
                  key={p}
                  className={maxPrice === p ? "active" : ""}
                  onClick={() => setMaxPrice(p)}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="budget-actions">
          <button
            type="button"
            className="apply-btn"
            onClick={() => setOpen(false)}
          >
            Apply
          </button>
          <p
        
            className="clear-btn"
            onClick={() => { setMinPrice(""); setMaxPrice(""); }}
          >
            Clear
          </p>
        </div>
      </div>
    </div>
  );
}
