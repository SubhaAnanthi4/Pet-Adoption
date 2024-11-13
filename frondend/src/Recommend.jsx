// Recommend.jsx
import React, { useState } from 'react';
import './Recommend.css';

const foodData = {
  dog: [
    { description: "Balanced diet for adult dogs", image:"https://m.media-amazon.com/images/I/71PxAos0XBL._AC_UF1000,1000_QL80_.jpg" },
    { description: "Rich in protein and fiber", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCqQr9kAfxRii8VBjG1QS4FpeWvqoo43PIQ&s" },
    { description: "Healthy treats with natural ingredients", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVZuh53avT3bRYFptcff4cGpX4V1zwe_F6g&s" },
    { description: "Specially formulated for puppies", image: "https://caninecareindia.com/wp-content/uploads/2022/01/41z4ipHaoCL-1.jpg" },
  ],
  cat: [
    { description: "Omega-rich for shiny fur", image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3153791-center-1" },
    { description: "High protein and vitamins", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDWFrKF8gSK_fQDjs0KbDvA5mtHbX66gfeA&s" },
    { description: "No grains, easy to digest", image: "https://eqk4booyvjq.exactdn.com/wp-content/uploads/2024/06/choosing-the-best-cat-food-for-your-pet-xwf-1.jpg?lossy=1&w=800&ssl=1" },
    { description: "Crunchy treats cats love", image: "https://gmthompson.net/cdn/shop/products/sd-feline-adult-11-plus-dry-productShot_zoom_1200x1200.jpg?v=1689787249" },
  ],
  bird: [
    { description: "Blend of seeds and nuts for birds", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Lk5IrOWrkHQwPs3E8hRTzyqZ1Tda7jqbbA&s" },
    { description: "Nutrient-packed for all birds", image: "https://i.ebayimg.com/thumbs/images/g/NL8AAOSwZKpiE9nj/s-l500.jpg" },
    { description: "Natural fruits for variety", image: "https://i.ytimg.com/vi/fgLYm31Kma0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASIOBgTWBC0sEreNGZlqs2-OMbQQ" },
    { description: "Fun treat for cage birds", image: "https://images-eu.ssl-images-amazon.com/images/I/71cI98OUU+L._AC_UL330_SR330,330_.jpg" },
  ]
};

const PetFoodSection = ({ type, showFood }) => {
    const getImageSrc = () => {
      switch (type) {
        case "dog":
          return `https://wallpapers.com/images/featured/cute-dog-background-5f00ubr8g3iqlbuh.jpg`;
        case "cat":
          return `https://www.shutterstock.com/image-photo/orange-cat-sits-looking-straight-600nw-2479857351.jpg`;
        case "bird":
          return `https://images.unsplash.com/photo-1486365227551-f3f90034a57c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D`;
        default:
          return "";
      }
    };
  
    return (
      <div className="pet-food-container">
        <img
          src={getImageSrc()}
          alt={`${type}`}
          className="pet-food-image"
        />
        <button onClick={() => showFood(type)} className="see-details-button">
          See Details for Food
        </button>
      </div>
    );
  };
  
const FoodDetails = ({ foodItems, onClose }) => (
  <div className="food-details-container">
    <button onClick={onClose} className="food-details-close">Close</button>
    <div className="food-details-cards">
      {foodItems.map((food, index) => (
        <div key={index} className="food-card">
          <img src={food.image} alt="food" className="food-card-image" />
          <p>{food.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Recommend = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const showFood = (pet) => {
    setSelectedPet(pet);
  };

  const closeFoodDetails = () => {
    setSelectedPet(null);
  };

  return (
    <div className="recommend-page">
      <nav className="recommend-navbar">
        <h1>Pet Food Recommender</h1>
      </nav>
      <h2 className="recommend-title">Recommended Foods for Pets</h2>
      <div className="recommend-container">
        <PetFoodSection type="dog" showFood={showFood} />
        <PetFoodSection type="cat" showFood={showFood} />
        <PetFoodSection type="bird" showFood={showFood} />
      </div>
      {selectedPet && (
        <FoodDetails foodItems={foodData[selectedPet]} onClose={closeFoodDetails} />
      )}
    </div>
  );
};

export default Recommend;
