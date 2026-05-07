import CardFace from "./components/CardFace/CardFace.jsx";
import cardback from "./images/cardback.png";
import Head from "./components/Header/Header.jsx";
import { useState } from "react";
import "./App.css";

const images = import.meta.glob("./images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});
const imageArray = Object.values(images)
  .map((module) => module.default)
  .filter((path) => path.includes("cardfront"))
  .map((path, i) => ({ url: path, id: i }));

function Card({ url }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => {
        setFlipped((prev) => !prev);
      }}
      className="relative w-full aspect-[137/274] [perspective:1000px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500
        [transform-style:preserve-3d]
        ${flipped ? "[transform:rotateY(180deg)]" : ""} [will-change:transform]`}
      >
        <CardFace image={url} flipped={flipped} />
        <CardFace image={cardback} isFront flipped={flipped} />
      </div>
    </div>
  );
}

function CardsWrapper({}) {
  return (
    <div className="card-wrapper grid grid-cols-[repeat(auto-fit,minmax(137px,1fr))] auto-rows-min gap-x-[30px] gap-y-[20px] overflow-y-auto h-full [scrollbar-width:thin] row-start-2 col-start-1 col-end-4 z-10 relative mt-[50px] mr-[50px] px-[20px] pb-[20px]">
      {imageArray.map((image) => (
        <Card url={image.url} key={image.id} />
      ))}
    </div>
  );
}

function Home({}) {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-[20px_1fr_20px] grid-rows-[auto_1fr] h-full">
        <div className="row-start-1 col-start-1 row-end-3 w-[20px]"></div>
        <Head />
        <CardsWrapper />
        <div className="col-start-3 row-start-1 row-end-3 w-[20px]"></div>
      </div>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
