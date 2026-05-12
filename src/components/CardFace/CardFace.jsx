function CardFace({ image, isFront, flipped }) {
  return (
    <div
      className={`absolute inset-0 [backface-visibility:hidden] transition-opacity ${
        isFront
          ? `[transform:rotateY(180deg)] ${flipped ? "opacity-100 duration-0" : "opacity-0 duration-500"}`
          : `${flipped ? "opacity-0 duration-400" : "opacity-100 duration-500"}`
      }`}
    >
      <div
        className={`absolute inset-0 bg-[#743338] transition-bg duration-200 ${!isFront ? "hover:bg-[rgb(106,250,251)] after:absolute after:content-[''] after:right-0 after:top-0 after:h-[100%] after:w-[5%] after:bg-[#6AFAFB] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200 after:shadow-[0_0_5px_0px_rgb(106,250,251)]" : ""}
            [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)]`}
      >
        <div
          className={`absolute inset-[1px] bg-cover bg-center bg-no-repeat
              [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%_-_11px),calc(100%_-_9px)_100%,0%_100%)] ${!isFront ? "hover:shadow-[inset_0_0_5px_0px_rgb(106,250,251)]" : ""}`}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      </div>
    </div>
  );
}

export default CardFace;
