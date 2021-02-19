import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGrandTourS4/CHMA_S4SP2_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB413892615_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            key="12345"
            id="12345"
            title="Taco vs Burrito - The Wildly Popular Surprisingly Strategic Card Game Created by a 7 Year Old"
            image="https://images-na.ssl-images-amazon.com/images/I/51dWusSxDtL._AC_.jpg"
            price={29.99}
            rating={4}
          />
          <Product
            key="12346"
            id="12346"
            title="Ray-Ban Rb3025 Classic Polarized Aviator Sunglasses"
            image="https://images-na.ssl-images-amazon.com/images/I/61NyO1qVRkL._AC_UX679_.jpg"
            price={59.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            key="12347"
            id="12347"
            title="Gamewright Trash Pandas - The Raucous Raccoon Card Game "
            image="https://images-na.ssl-images-amazon.com/images/I/81Fd5EdUtxL._AC_SL1500_.jpg"
            price={9.99}
            rating={5}
          />
          <Product
            key="12348"
            id="12348"
            title="Renegade Game Studios - The Fox in the Forest Card Game (0574RGS)"
            image="https://images-na.ssl-images-amazon.com/images/I/71vQYociKcL._AC_SL1500_.jpg"
            price={19.99}
            rating={2}
          />
          <Product
            key="12349"
            id="123459"
            title="JBL Boombox - Waterproof Portable Bluetooth Speaker"
            image="https://images-na.ssl-images-amazon.com/images/I/71R1nO2uW0L._AC_SL1500_.jpg"
            price={359.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="12345"
            id="12344"
            title="Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H, NVIDIA GeForce GTX 1650 Ti, 15.6 Full HD IPS 144Hz Display, 8GB DDR4, 256GB NVMe SSD"
            image="https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg"
            price={1339.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
