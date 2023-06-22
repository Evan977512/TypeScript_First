import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "John",
  category: "Korean",
  address: {
    city: "Calgary",
    street: "1234 5th Ave",
    postalCode: "T3K 0B4",
  },
  menu: [
    { name: "pho", price: 10, category: "noodle" },
    { name: "spring roll", price: 5, category: "appetizer" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenu = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="kimchi pizza" category="pizza" showBestMenuName={showBestMenu} />
    </div>
  );
};

export default App;
