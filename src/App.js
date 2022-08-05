import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import React, {useEffect, useState} from "react"

// var fs = require('fs');

function App() {
  // var files = fs.readdirSync('./images/');
  let myImage = document.createElement("img")
  let images2 = fetch("/home/chris/repos/memory-card-game/public/images")
  .then((response) => response)
  .then((myBlob) => {
    console.log(myBlob.body)
    // myImage.src = URL.createObjectURL(myBlob);
  });
  console.log(images2)

  let images = [
    'images/03-Shaking.gif',
    'images/06-Magma.gif',
    'images/08-Sleeping.gif',
    'images/11-Nervous.gif',
    'images/15-Riding.gif',
    'images/19-Henshin.gif',
    'images/20-Knocking.gif',
    'images/21-Taiyaki.gif',
    'images/28-Confused.gif',
    'images/31-UnLucky.gif',
    'images/32-Punching.gif',
    'images/35-Birthday.gif'
  ]
  const [cards, setCards] = useState(images);

  const shuffleArray = () => {

  }

  return (
    <div>
      {/* <img src="images/20-Knocking.gif" alt="" /> */}
      <Scoreboard></Scoreboard>
      <Gameboard cards={cards}></Gameboard>
    </div>
  );
}

export default App;
