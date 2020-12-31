import React from "react";
import "./Observations.css";

export default function Observations() {
  return (
    <div className="Observations">
      <h2>My Observations</h2>
      <div className="Observations-sort">
        <label for="Observations-sort">Sort by</label>
        <select>
          <option value="date-desc">Date (Newest to Oldest)</option>
          <option value="date-asc">Date (Oldest to Newest)</option>
          <option value="species">Species</option>
        </select>
      </div>
      <div className="Observations-item">
        <h3>Robin</h3>
        <p>
          Date: 12/31/2020<br></br>
          Time: 3:00 PM
        </p>
        <div className="Observations-item-description">
          <p>Saw a robin at the bottom of my garden. It was very fat.</p>
        </div>
      </div>
      <div className="Observations-item">
        <h3>Fox</h3>
        <p>
          Date: 12/28/2020<br></br>
          Time: 6:00 AM
        </p>
        <div className="Observations-item-description">
          <p>
            Saw two young foxes with a mother fox. The mother fox hissed at me.
          </p>
        </div>
      </div>
      <div className="Observations-item">
        <h3>Raccoon</h3>
        <p>
          Date: 12/26/2020<br></br>
          Time: 7:00 AM
        </p>
        <div className="Observations-item-description">
          <p>A group of raccoons chased me down the street.</p>
        </div>
      </div>
    </div>
  );
}
