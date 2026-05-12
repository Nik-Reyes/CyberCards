// To win the game, click all cards but never click a card more than once
import Home from "./Home.jsx";
import { use, useState } from "react";

import "./App.css";

const images = import.meta.glob("./assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

let cardData = Object.values(images)
  .map((module) => module.default)
  .filter((path) => path.includes("cardfront"))
  .map((path, i) => ({ url: path, id: self.crypto.randomUUID() }));

cardData = cardData.slice(0, 5);

function LandingPage({ cardSet }) {
  const [clickedCards, setClickedCards] = useState(new Set());
  let currentScore = clickedCards.size;

  function handleCardClick(card) {
    if (clickedCards.has(card.id)) {
      setClickedCards(new Set());
    } else if (!clickedCards.has(card.id)) {
      setClickedCards((prev) => new Set([...prev, card.id]));
    }
  }

  return (
    <Home
      cardData={cardData}
      handleCardClick={handleCardClick}
      currScore={currentScore}
    />
  );
}

function App() {
  return <LandingPage />;
}

export default App;
