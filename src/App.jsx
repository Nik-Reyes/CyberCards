import "./App.css";

function Card() {
  return (
    <div className="bg-transparent [perspective:1000px] ">
      <div className="relative transition-transform duration-600 transform-3d aspect-[137/274] max-w-[180px] w-full [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)] bg-[#743338] hover:rotate-y-180">
        <div className="absolute inset h-[calc(100%_-_1px)] w-[calc(100%_-_1px)] [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)] bg-[url('./images/cardback.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

function Home({}) {
  return (
    <div className="p-[20px] justify-center flex-wrap gap-x-[50px] gap-y-[30px] overflow-y-auto bg-gray-800 h-screen bg-gradient-to-b from-[#2b0e10] to-[#07080d] ">
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
