import "./App.css";
import CardFace from "./components/CardFace/CardFace.jsx";

function Card() {
  return (
    <div className="relative w-full aspect-[137/274] [perspective:1000px] group">
      <div
        className="relative w-full h-full transition-transform duration-500
        [transform-style:preserve-3d]
        group-hover:[transform:rotateY(180deg)] [will-change:transform]"
      >
        <CardFace image="./images/cardfront-one.png" />
        <CardFace image="./images/cardback.png" flipped />
      </div>
    </div>
  );
}

function Home({}) {
  return (
    <div className="p-[20px] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] min-h-screen gap-x-[30px] gap-y-[20px] overflow-y-auto bg-gray-800 bg-gradient-to-b from-[#2b0e10] to-[#07080d]">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
