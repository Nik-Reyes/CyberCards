import WAS from "./assets/svgs/WAS.svg?react";
import SquarePattern from "./assets/svgs/SquarePattern.svg?react";
import Nos from "./assets/svgs/Nos.svg?react";
import Kiroshi from "./assets/svgs/Kiroshi.svg?react";
import NcCode from "./assets/svgs/NcCode.svg?react";
import CenterSquare from "./assets/svgs/CenterSquare.svg?react";
import Barcode from "./assets/svgs/Barcode.svg?react";
import Binary from "./assets/svgs/Binary.svg?react";
import StorageInfo from "./assets/svgs/StorageInfo.svg?react";
import AV1 from "./assets/svgs/AV1.svg?react";
import ValAdjust from "./assets/svgs/ValAdjust.svg?react";
import Head from "./components/Header/Header.jsx";
import CardWrapper from "./components/CardWrapper/CardWrapper.jsx";

function Home({ cardData, handleCardClick, currScore }) {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-[50px_1fr_50px] grid-rows-[auto_1fr] h-full">
        <div className="grid grid-cols=[repeat(2, min-content)] gap-x-[2px] grid-flow-col row-start-1 col-start-1 row-end-3 col-end-2 mr-auto pl-[5px]">
          <div className="grid grid-rows-2">
            <div className="grid">
              <AV1 className="w-[8px] h-auto m-auto" />
              <ValAdjust className="w-[9px] h-auto m-auto relative top-[-50px]" />
            </div>
            <div className="grid">
              <StorageInfo className="w-[7.5px] h-auto m-auto relative top-[-50px]" />
            </div>
          </div>
          <div className="overflow-hidden grid gap-[5px]">
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
          </div>
        </div>
        <Head currScore={currScore} />
        <CardWrapper cardData={cardData} handleCardClick={handleCardClick} />
        <div className="grid grid-cols=[repeat(3, min-content)] gap-x-[5px] grid-flow-col auto-cols-min col-start-3 row-start-1 row-end-3 pr-1 ml-auto">
          <div className="grid grid-rows-2">
            <div className="grid">
              <Binary className="w-[20px] h-auto m-auto relative top-[-50px]" />
            </div>
            <div className="grid">
              <SquarePattern className="w-[7.5px] h-auto m-auto relative top-[50px]" />
            </div>
          </div>
          <div className="overflow-hidden grid gap-[5px]">
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
            <Barcode className="w-[6.5px] h-auto scale-x-[-1]" />
          </div>
          <div className="grid place-items-center">
            <div className="grid gap-5">
              <div className="grid gap-[10px]">
                <Nos className="w-[6px] h-auto" />
                <CenterSquare className="w-[6px] h-auto" />
                <WAS className="w-[6px] h-auto" />
              </div>
              <div className="">
                <NcCode className="w-[3px] h-auto m-auto mb-[2px]" />
                <Kiroshi className="w-[3px] h-auto m-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
