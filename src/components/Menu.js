import React from "react";
import Image from "next/image";
import Logo from "@/img/fietslogo.png";
import Link from 'next/link';
const Navigation = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="App-header">
      
  <div className="container">
   <div className="logo">
        <Image src={Logo} alt="Bike Company Logo" width={100} height={100}/>
      </div>
      </div> 
      <button className="menu-button" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

   <div className="container2">
       <nav className={menuOpen ? "menu-open" : ""}>
        <ul>
          <li>
            <Link href="/">Mechelen</Link>
          </li>
          <li>
            <Link href="/gent">Gent</Link>
          </li>
          <li>
            <Link href="/about">Antwerpen</Link>
          </li>
        </ul>
      </nav>

    
    </div>   
   
   
   
    </header>
  );
};

export default Navigation;