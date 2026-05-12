import Card from "../Card/Card.jsx";
import { useState, useEffect } from "react";

function CardWrapper({ cardData, handleCardClick }) {
  const [flipped, setFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([...cardData]);

  useEffect(() => {
    if (!flipped) return;
    const shuffleTimout = setTimeout(() => {
      setShuffledCards((prev) => {
        let shuffledDeck;
        do {
          shuffledDeck = [...prev];
          for (let i = shuffledDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = shuffledDeck[i];
            shuffledDeck[i] = shuffledDeck[j];
            shuffledDeck[j] = k;
          }
        } while (shuffledDeck.some((card, i) => card.id === prev[i].id));
        return shuffledDeck;
      });
    }, 500);

    const flipBackTimeout = setTimeout(() => {
      setFlipped((prev) => !prev);
    }, 1000);

    return () => {
      clearTimeout(shuffleTimout);
      clearTimeout(flipBackTimeout);
    };
  }, [flipped]);

  console.log(shuffledCards);

  return (
    <div className="card-wrapper grid grid-cols-[repeat(auto-fit,minmax(137px,1fr))] auto-rows-min gap-x-[30px] gap-y-[20px] overflow-y-auto h-full [scrollbar-width:thin] row-start-2 col-start-1 col-end-4 z-10 relative mt-[50px] ml-[50px] mr-[50px] px-[20px] pb-[20px]">
      {shuffledCards.map((card) => (
        <Card
          key={card.id}
          card={card}
          flipped={flipped}
          onCardClick={(card) => {
            handleCardClick(card);
            setFlipped((prev) => !prev);
          }}
        />
      ))}
    </div>
  );
}

export default CardWrapper;
