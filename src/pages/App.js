import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import BikeList from "./BikeList";
import BikeDetails from "./BikeDetails";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  function handleBikeClick(bike) {
    setSelectedBike(bike);
  }

  function handleBackClick() {
    setSelectedBike(null);
  }

  return (
    <div className="App">
      <header>
        <Menu isOpen={menuOpen} onMenuClick={handleMenuClick} />
      </header>
      <main>
        {selectedBike ? (
          <BikeDetails bike={selectedBike} onBackClick={handleBackClick} />
        ) : (
          <BikeList bikes={bikes} onBikeClick={handleBikeClick} />
        )}
      </main>
    </div>
  );
}

export default App;
