import React from "react";
import Image from "next/image";
import styles from "@/styles/App.module.css";
import bike1 from '@/img/Bicycle1.jpg';
import bike2 from '@/img/Bicycle2.jpg';
import bike3 from '@/img/Bicycle3.jpg';

function BikeDetails({ bike, onBackClick }) {
  let imageSrc = '';

  switch (bike.name) {
    case 'The Classic (electric)':
      imageSrc = bike1;
      break;
    case 'The Roadstar (electric)':
      imageSrc = bike2;
      break;
    case 'The Mountain (electric)':
      imageSrc = bike3;
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
          <p>{bike.price}</p>
          <button className={styles.buttondetails} onClick={onBackClick}>Back to List</button>
        </div>
      </div>
    </div>
  );
}

export default BikeDetails;


