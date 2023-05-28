import React, { useState } from "react";
import styles from "../styles/App.module.css";
import Menu from "@/components/Menu";
import BikeList from "@/components/BikeList";
import BikeDetails from "@/components/BikeAnta";
import bike1 from "@/img/Bicycle1.jpg";
import bike2 from "@/img/Bicycle2.jpg";
import bike3 from "@/img/Bicycle3.jpg";
import bike4 from "@/img/Bicycle5.jpg";
import bike5 from "@/img/Bicycle6.jpg";
import bike6 from "@/img/Bicycle7.jpg";
import useNetwork from '@/data/network';
import { useRouter } from 'next/router'
import LocationImage from '@/components/LocationImage'; 
import Link from 'next/link'; 

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

  const bikes = [{name:'The Classic (electric)',img:bike4, verhaal:'The Perfect City Bike', description:'The Classic (electric): A stylish and comfortable electric bike that is perfect for cruising around town. With its classic design and powerful motor, you’ll be able to ride in style and comfort.', price:'25€/h'}
  , {name:'The Roadstar (electric)',img:bike5, verhaal:'The Perfect Speed Bike', description:'The Roadstar (electric): A sleek and fast electric bike that is perfect for commuting or long rides. With its lightweight frame and powerful motor, you’ll be able to get where you need to go quickly and easily.', price:'75€/h' },
   {name:'The Mountain (electric)',img:bike6, verhaal:'The Perfect Offroad Bike', description:'The Mountain (electric): A rugged and durable electric bike that is perfect for off-road adventures. With its sturdy frame and powerful motor, you’ll be able to tackle even the toughest terrain with ease.', price:'50€/h' }]
  





// ? is IF : is Else
// ?

  return (
    <div className="App">
      <header>
        <Menu isOpen={menuOpen} onMenuClick={handleMenuClick} />
        <h1>Hire Your E-Bike</h1>
      </header>
      <main>
       
        {selectedBike ? (
          <BikeDetails bike={selectedBike} onBackClick={handleBackClick} />
        ) : (
          <BikeList bikes={bikes}  onBikeClick={handleBikeClick} />
        )}
      </main>
      <div  className={styles.mapbox} onBackClick={handleBackClick}>
      {selectedBike ? null : (
      <LocationImage className={styles.bikeshop} location={{name:'E-store', latitude:51.21068640721704, longitude:4.397809329722077}}/>
      )}

      </div>
      <h5>Fietsenwinkel Jurgen Mechelen</h5>
    </div>
  );
}

export default App;






