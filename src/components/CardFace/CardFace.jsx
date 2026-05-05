const clip =
  "[clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]";

function CardFace({ image, isFront, flipped }) {
  return (
    <div
      className={`absolute inset-0 [backface-visibility:hidden] transition-opacity ${
        isFront
          ? `[transform:rotateY(180deg)] ${flipped ? "opacity-100 duration-300" : "opacity-0 duration-300"}`
          : `${flipped ? "opacity-0 duration-300" : "opacity-100 duration-600"}`
      }`}
    >
      <div
        className="absolute inset-0 bg-[#743338]
            [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]"
      >
        <div
          className={`absolute inset-[1px] bg-cover bg-center bg-no-repeat
              [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]`}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      </div>
    </div>
  );
}

export default CardFace;
