import React from "react";
import Image from "next/image";
import styles from "@/styles/App.module.css";
import bike4 from "@/img/Bicycle5.jpg";
import bike5 from "@/img/Bicycle6.jpg";
import bike6 from "@/img/Bicycle7.jpg";

function BikeDetails({ bike, onBackClick }) {
  let imageSrc = '';

  switch (bike.name) {
    case 'The Classic (electric)':
      imageSrc = bike4;
      break;
    case 'The Roadstar (electric)':
      imageSrc = bike5;
      break;
    case 'The Mountain (electric)':
      imageSrc = bike6;
      break;
    default:
      imageSrc = bike1;
  }

  return (
    <div className="bike-details-page">
      <div className="bike-details">
        <Image src={imageSrc} alt={bike.name} />
        <div>
          <h2>{bike.name}</h2>
          <p>{bike.description}</p>
          <h4>{bike.price}</h4>
          <button className={styles.buttondetails} onClick={onBackClick}>Back to List</button>
        </div>
      </div>
    </div>
  );
}

export default BikeDetails;


