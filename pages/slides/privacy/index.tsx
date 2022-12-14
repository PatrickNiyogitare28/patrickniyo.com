import Image from 'next/image';
import React, { useState } from 'react';
import DataBusiness from './pages/data-business';
import DigitalGrowth from './pages/digital-growth';
import EdwardSnowden from './pages/edward';
import Intro from './pages/intro';
import PrivacyViolation from './pages/privacy-violation';
import TakeCare from './pages/take-care';
import TheWorldOfTech from './pages/world-of-tech';

interface ISlide {
  index: number;
  content: React.ReactNode;
}

const Slide: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: Array<ISlide> = [
    {
      index: 0,
      content: <Intro />,
    },
    {
      index: 1,
      content: <TheWorldOfTech />,
    },
    {
      index: 2,
      content: <DigitalGrowth />,
    },
    {
      index: 3,
      content: <DataBusiness />,
    },
    {
      index: 4,
      content: <PrivacyViolation />,
    },
    {
      index: 5,
      content: <EdwardSnowden />,
    },
    {
      index: 6,
      content: <TakeCare />,
    },
  ];
  if (typeof window !== 'undefined') {
    document.onkeydown = checkKey;
  }
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
      // up arrow
      if (activeSlide === 0) return;
      setActiveSlide(activeSlide - 1);
    } else if (e.keyCode == '40') {
      // down arrow
      if (activeSlide === slides.length - 1) return;
      setActiveSlide(activeSlide + 1);
    } else if (e.keyCode == '37') {
      // left arrow
      if (activeSlide === 0) return;
      setActiveSlide(activeSlide - 1);
    } else if (e.keyCode == '39') {
      // right arrow
      if (activeSlide === slides.length - 1) return;
      setActiveSlide(activeSlide + 1);
    }
  }
  const RenderSlide = () => {
    return <div>{slides[activeSlide].content}</div>;
  };

  const onShowFullScreen = () => {
    const elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };
  return (
    <div>
      <RenderSlide />
      <div
        className="absolute bottom-4 right-4 cursor-pointer"
        onClick={() => onShowFullScreen()}
      >
        <Image
          src="/icons/full-screen-icon.png"
          className="cursor-pointer"
          width={40}
          height={40}
          alt="fullscreen"
        />
      </div>
    </div>
  );
};
export default Slide;
