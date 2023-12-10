import "./App.css";
import myData from "./data/berlin.json";
import driverData from "./data/driver.json"
import CardsList from "./components/CardsList";
import { useState } from "react";
import Greeting from "./components/Greeting";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import DriverCards from "./components/DriverCards";
import Rating from "./components/Rating";
import LikeButtton from "./components/LikeButtton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";

function App() {

  const [persons, setPersons] = useState(myData);
  const [driver, setDriver] = useState(driverData);

  return (
    <div className="App">
      <h2>Iteration 1</h2>
      <CardsList cards={persons}/>
      <h2>Iteration 2</h2>
      <Greeting lang={"Star Wars"} text={"Seb"}/>
      <h2>Iteration 3</h2>
      <Random min={12} max={15}/>
      <h2>Iteration 4</h2>
      <BoxColor  r={100} g={50} b={60}/>
      <h2>Iteration 6</h2>
      <Rating rating={3.5}/>
      <h2>Iteration 7</h2>
      <DriverCards driver={driver}/>
      <h2>Iteration 8</h2>
      <LikeButtton />
      <h2>Iteration 9</h2>
      <ClickablePicture />
      <h2>Interation 10</h2>
      <p className="mt-60"></p>
      <Dice />
      <h2> Iteration 11</h2>
      <Carousel images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}/>

    </div>
  );
}

export default App;
