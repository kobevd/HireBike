import React from "react";
import Image from "next/image";
import styles from "@/styles/App.module.css";
import bike7 from "@/img/Bicycle8.jpg";
import bike8 from "@/img/Bicycle9.jpg";
import bike9 from "@/img/Bicycle10.jpg";

function BikeDetails({ bike, onBackClick }) {
  let imageSrc = '';

  switch (bike.name) {
    case 'The Classic (electric)':
      imageSrc = bike7;
      break;
    case 'The Roadstar (electric)':
      imageSrc = bike8;
      break;
    case 'The Mountain (electric)':
      imageSrc = bike9;
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


