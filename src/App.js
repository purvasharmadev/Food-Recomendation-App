import React, { useState } from "react";
import "./style.css";

var database = {
  All: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2017/09/09/12/09/india-2731812__340.jpg",
      dishName: "Indian Veg Thali",
      review:
        "Feeling Hungry?? Dont worry The great Indian Thali always has your back!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444__340.jpg",
      dishName: "Biryani",
      review:
        "These Dish has heavenly power,once you have then there's no turning back!!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/05/10/13/53/naan-5154130__340.jpg",
      dishName: "Naan Butter Chicken",
      review: "Talking about fighting hunger? These dish is your saviour!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/08/29/03/14/pokora-5526036__340.jpg",

      dishName: "Pokora Aloo Makki",
      review: "Pokoras are men's best friend , they say.",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2013/07/06/13/44/food-143622__340.jpg",

      dishName: "Samosa",
      review: "The king of street foods! hands down 🙌 ",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2013/01/15/11/22/panipuri-74974__340.jpg",

      dishName: "Gupchup",
      review: "You call it Gupchup, I call it love ❤",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2015/06/23/05/23/fresh-jalebi-818316_960_720.jpg",
      dishName: "Jalebi",
      review: "sweetest thing in the planet",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
      dishName: "Rasogulla",
      review: "Bengal's Pride",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2017/08/10/18/14/indian-sweets-2625911__340.jpg",
      dishName: "Mithai",
      review:
        "we indians have the power to finish these box t the minute we open it 😉",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045__340.jpg",
      dishName: "Tandori Chicken Tikka",
      review: "Oh I like it when you order Tandori Chicken tikka 😍",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/08/07/19/19/chili-chicken-5471407__340.jpg",
      dishName: "Chilli Chicken",
      review: "Oh That's so spicy!😍",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2015/12/08/00/59/ice-cream-1082237__340.jpg",

      dishName: "Ice Cream Sundae",
      review: "Oh that's one lovely Sun-Day 😉",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2016/03/22/00/59/ice-1271986__340.jpg",
      dishName: "Vanilla Softy",
      review: "Who dosen't like a softy ?🤔,ummm No one 😜!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2014/01/16/00/51/ice-cream-246161__340.jpg",
      dishName: "Choclate Oreo",
      review: "We are not talking if you dont like this gem!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2017/05/11/19/49/iced-coffee-2305203__340.jpg",

      dishName: "Iced Coffee",
      review: "Oh Chills ! Literal Chills !!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2015/12/27/17/31/chai-latte-1110053__340.jpg",

      dishName: "Tea latte",
      review: "Hey Tea + coffee, kinda cool!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2016/10/26/01/01/tea-1770422__340.jpg",

      dishName: "Chai",
      review: "love is in the house 💕",
      hearts: "❤❤❤❤❤"
    }
  ],
  MainCourse: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2017/09/09/12/09/india-2731812__340.jpg",
      dishName: "Indian Veg Thali",
      review:
        "Feeling Hungry?? Dont worry The great Indian Thali always has your back!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444__340.jpg",
      dishName: "Biryani",
      review:
        "These Dish has heavenly power,once you have then there's no turning back!!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/05/10/13/53/naan-5154130__340.jpg",
      dishName: "Naan Butter Chicken",
      review: "Talking about fighting hunger? These dish is your saviour!",
      hearts: "❤❤❤❤❤"
    }
  ],
  StreetFood: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/08/29/03/14/pokora-5526036__340.jpg",

      dishName: "Pokora Aloo Makki",
      review: "Pokoras are men's best friend , they say.",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2013/07/06/13/44/food-143622__340.jpg",

      dishName: "Samosa",
      review: "The king of street foods! hands down 🙌 ",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2013/01/15/11/22/panipuri-74974__340.jpg",

      dishName: "Gupchup",
      review: "You call it Gupchup, I call it love ❤",
      hearts: "❤❤❤❤❤"
    }
  ],
  Sweets: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2015/06/23/05/23/fresh-jalebi-818316_960_720.jpg",
      dishName: "Jalebi",
      review: "sweetest thing in the planet",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
      dishName: "Rasogulla",
      review: "Bengal's Pride",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2017/08/10/18/14/indian-sweets-2625911__340.jpg",
      dishName: "Mithai",
      review:
        "we indians have the power to finish these box t the minute we open it 😉",
      hearts: "❤❤❤❤❤"
    }
  ],
  IceCream: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2015/12/08/00/59/ice-cream-1082237__340.jpg",

      dishName: "Ice Cream Sundae",
      review: "Oh that's one lovely Sun-Day 😉",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2016/03/22/00/59/ice-1271986__340.jpg",
      dishName: "Vanilla Softy",
      review: "Who dosen't like a softy ?🤔,ummm No one 😜!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2014/01/16/00/51/ice-cream-246161__340.jpg",
      dishName: "Choclate Oreo",
      review: "We are not talking if you dont like this gem!",
      hearts: "❤❤❤❤❤"
    }
  ],
  Beverages: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2017/05/11/19/49/iced-coffee-2305203__340.jpg",

      dishName: "Iced Coffee",
      review: "Oh Chills ! Literal Chills !!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2015/12/27/17/31/chai-latte-1110053__340.jpg",

      dishName: "Tea latte",
      review: "Hey Tea + coffee, kinda cool!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2016/10/26/01/01/tea-1770422__340.jpg",

      dishName: "Chai",
      review: "love is in the house 💕",
      hearts: "❤❤❤❤❤"
    }
  ],
  NonVeg: [
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/05/10/13/53/naan-5154130__340.jpg",
      dishName: "Naan Butter Chicken",
      review: "Talking about fighting hunger? These dish is your saviour!",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045__340.jpg",
      dishName: "Tandori Chicken Tikka",
      review: "Oh I like it when you order Tandori Chicken tikka 😍",
      hearts: "❤❤❤❤❤"
    },
    {
      dishImage:
        "https://cdn.pixabay.com/photo/2020/08/07/19/19/chili-chicken-5471407__340.jpg",
      dishName: "Chilli Chicken",
      review: "Oh That's so spicy!😍",
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
      <h1>
        <i>FoodieFyi</i>
      </h1>
      <section className="intro">
        <p>
          {" "}
          ⏰Wake Up its Food'O'Clock!! Time to Eat something delicious.
          <br />
        </p>
      </section>
      {/* Listing Dish Categories */}
      <div className="btn-area">
        {foods.map((food) => (
          <button className="btn" onClick={() => foodClickHandler(food)}>
            {food}
          </button>
        ))}
      </div>

      {/* Listing specific category */}

      {database[food].map((dishes) => (
        <section key={dishes.dishName}>
          <div className="dishCard">
            {/* <div className="row"> */}
            <div className="column">
              <img
                src={dishes.dishImage}
                height="250px"
                width="150px"
                alt="coming soon"
              />
            </div>
            <div className="column">
              <h3>{dishes.dishName}</h3>
              <p>{dishes.review}</p>
              <h6>
                Hearts - <span className="heart"> {dishes.hearts}</span>
              </h6>
            </div>
            {/* </div> */}
          </div>
          <br />
        </section>
      ))}
    </div>
  );
}
