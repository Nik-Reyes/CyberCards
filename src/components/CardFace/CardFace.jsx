const clip =
  "[clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]";

function CardFace({ image, flipped }) {
  return (
    <div
      className={`absolute inset-0 [backface-visibility:hidden] transition-opacity duration-500 $ ${
        flipped
          ? "[transform:rotateY(180deg)] opacity-0 group-hover:opacity-100"
          : "opacity-100 group-hover:opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-[#743338]
            [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]"
      >
        <div
          className={`absolute inset-[1px]
              bg-[url('${image}')] bg-cover bg-center bg-no-repeat
              [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]`}
        ></div>
      </div>
    </div>
  );
}

export default CardFace;
