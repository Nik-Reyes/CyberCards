function Head({ currScore, highScore }) {
  return (
    <header className="col-start-2 row-start-1 h-[60px] relative after:content-[''] after:w-full after:h-[1.5px] after:bg-[#FF6D65] after:absolute after:bottom-0 after:left-0 after:shadow-[0_0_3px_1.25px_rgba(255,109,101,0.4)]">
      <div className="h-full header-content-wrapper grid grid-cols-[auto_1fr_auto] text-center place-items-center">
        <div className="flex gap-1">
          <div>
            <span style={{ fontSize: "2rem", lineHeight: "1" }}>
              {currScore}
            </span>
          </div>
          <div>
            <span style={{ fontSize: "1.2rem" }}>SCORE</span>
          </div>
          <div>
            <span style={{ fontSize: "2rem", lineHeight: "1" }}>
              {highScore}
            </span>
          </div>
          <div>
            <span style={{ fontSize: "1.2rem" }}>HIGH SCORE</span>
          </div>
        </div>
        <div className="">here</div>
        <div className="">
          <div className="">here</div>
        </div>
      </div>
    </header>
  );
}

export default Head;
