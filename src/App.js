import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import React, {useEffect, useState} from "react"

function App() {
  let images = [
    {'src': 'images/03-Shaking.gif','alt':'shaking'},
    {'src': 'images/06-Magma.gif','alt':'Magma'},
    {'src': 'images/08-Sleeping.gif','alt':'Sleeping'},
    {'src': 'images/11-Nervous.gif','alt':'Nervous'},
    {'src': 'images/15-Riding.gif','alt':'Riding'},
    {'src': 'images/19-Henshin.gif','alt':'Henshin'},
    {'src': 'images/20-Knocking.gif','alt':'Knocking'},
    {'src': 'images/21-Taiyaki.gif','alt':'Taiyaki'},
    {'src': 'images/28-Confused.gif','alt':'Confused'},
    {'src': 'images/31-UnLucky.gif','alt':'UnLucky'},
    {'src': 'images/32-Punching.gif','alt':'Punching'},
    {'src': 'images/35-Birthday.gif','alt':'Birthday'}
  ]
  const [cards, setCards] = useState(images);
  const [score, setScore] = useState({
    "current": 0,
    "highest": 0
  });
  const [selected, setSelected] = useState(new Set());

  useEffect(()=>{
  },[score,cards]);

  const shuffleArray = () => {
    let prev = [...cards];
    let currentIndex = prev.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [prev[currentIndex], prev[randomIndex]] = [
        prev[randomIndex], prev[currentIndex]];
    }
    setCards(prev)
  }
  const handleClick = (e) => {
    shuffleArray();
    let chosen = e.target.alt;
    if(selected.has(chosen)) {
      resetGame();
    }
    else {
      selected.add(chosen);
      updateScore();

    }
  }
  const resetGame = () => {
    let current = score.current;
    let highest = score.highest;
    let newScore = {
      "current": 0,
      "highest": current > highest ? current : highest
    };
    setScore(newScore)
    setSelected(new Set())
  }

  const updateScore = () => {
    let currentScore = score;
    currentScore.current = currentScore.current+1;
    setScore(currentScore)
  }
  
  return (
    <div>
      <Scoreboard score={score}></Scoreboard>
      <Gameboard cards={cards} handleClick={handleClick}></Gameboard>
    </div>
  );
}

export default App;
