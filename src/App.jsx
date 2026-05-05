import CardFace from "./components/CardFace/CardFace.jsx";
import cardback from "./images/cardback.png";
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

function Home({}) {
  return (
    <div className="p-[20px] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] min-h-screen gap-x-[30px] gap-y-[20px] overflow-y-auto bg-gray-800 bg-gradient-to-b from-[#2b0e10] to-[#07080d]">
      {imageArray.map((image) => (
        <Card url={image.url} key={image.id} />
      ))}
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
