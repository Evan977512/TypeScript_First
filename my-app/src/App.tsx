import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";

let data = {
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
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
};

export default App;
