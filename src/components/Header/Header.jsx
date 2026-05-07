function Head() {
  return (
    <header className="col-start-2 row-start-1 h-[60px] relative after:content-[''] after:w-full after:h-[1.5px] after:bg-[#FF6D65] after:absolute after:bottom-0 after:left-0 after:shadow-[0_0_3px_1.25px_rgba(255,109,101,0.4)]">
      <div className="header-content-wrapper grid grid-cols-3">
        <div className="">
          <div className="flex justify-start"></div>
        </div>
        <div className=""></div>
        <div className="">
          <div className="flex justify-end"></div>
        </div>
      </div>
    </header>
  );
}

export default Head;
