import CardFace from "../CardFace/CardFace.jsx";
import CardBacking from "../../assets/images/cardback.png";
import { useState } from "react";

function Card({ card, flipped, onCardClick }) {
  return (
    <div
      onClick={onCardClick}
      className="relative w-full aspect-[137/274] [perspective:2000px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-400
        [transform-style:preserve-3d]
        ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <CardFace image={card.url} flipped={flipped} />
        <CardFace image={CardBacking} isFront flipped={flipped} />
      </div>
    </div>
  );
}

export default Card;
