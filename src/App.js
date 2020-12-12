import React, { useState } from "react";
import "./styles.css";

var database = {
  All: [
    {
      dishName: "Chole Bhature",
      review:
        "The King of indian cusine!, best food to get your starve fulfill",
      hearts: "❤❤❤❤❤"
    },
    {
      dishName: "Chowmein",
      review: "The only chinese thing I coudn't get out from my favourites",
      hearts: "❤❤❤❤❤"
    },
    {
      dishName: "Pizza",
      review: "Pure happiness in form of food!",
      hearts: "❤❤❤❤❤"
    }
  ],
  Indian: [
    {
      dishName: "Chole Bhature",
      review:
        "The King of indian cusine!, best food to get your starve fulfill",
      hearts: "❤❤❤❤❤"
    }
  ],
  Chinese: [
    {
      dishName: "Chowmein",
      review: "The only chinese thing I coudn't get out from my favourites",
      hearts: "❤❤❤❤❤"
    }
  ],
  Italian: [
    {
      dishName: "Pizza",
      review: "Pure happiness in form of food!",
      hearts: "❤❤❤❤❤"
    }
  ]
};

var foods = Object.keys(database);

export default function App() {
  const [food, setFood] = useState("All");

  function foodClickHandler(food) {
    setFood(food);
  }

  return (
    <div className="App">
      <h1>Food Recomendation</h1>

      {/* Listing Dish Categories */}
      <div>
        {foods.map((food) => (
          <button onClick={() => foodClickHandler(food)}>{food}</button>
        ))}
      </div>

      {/* Listing specific category */}
      <ul>
        {database[food].map((dishes) => (
          <li key={dishes.dishName}>
            <div>
              <h3>Name - {dishes.dishName}</h3>
              <h4>Review - {dishes.review}</h4>
              <h4>Hearts - {dishes.hearts}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
