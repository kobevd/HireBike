import React from "react";
import Image from "next/image";
import styles from "@/styles/App.module.css";

function BikeList({ bikes, onBikeClick }) {
  return (
    <ul>
      {bikes.map((bike) => (
        <li key={bike.name}>
          <div className="bike-card">
            <Image src={bike.img} alt={bike.name} />
            <div className="bike-details">
              <h2>{bike.name}</h2>
              <p>{bike.verhaal}</p>
            </div>
            <button className={styles.buttondetails} onClick={() => onBikeClick(bike)}>Details</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BikeList;
