"use client";
import Image from "next/image";
import React, { ReactElement, ReactNode, useState } from "react";

interface CarouselItemProps {
  src: string;
  alt: string;
  description: string;
}

export const CarouselItem = ({ src, alt, description }: CarouselItemProps) => {
  return (
    <div className="inline-flex flex-col relative h-[330px] md:h-[430px] w-full">
      <div className="inline-flex relative h-[300px] sm:h-[300px] md:h-[400px]">
        <Image className="object-contain" fill={true} src={src} alt={alt} />
      </div>
      <div className="absolute bottom-0 flex w-full justify-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

interface CarouselProps {
  children: React.ReactElement[] | React.ReactElement;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [startActiveIndex, setStartActiveIndex] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState("0ms");

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTransitionDuration("0ms"); // instant
    setStartX(event.touches[0].clientX); // Get Starting X Coordinate
    setStartActiveIndex(activeIndex);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    let x = event.touches[0].clientX;
    setEndX(event.touches[0].clientX);
    setActiveIndex(startActiveIndex + (startX - x) / window.screen.width);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startX < endX) {
      updateIndex(activeIndex - 1);
    } else if (startX > endX) {
      updateIndex(activeIndex + 1);
    }
  };

  const updateIndex = (newIndex: number) => {
    setTransitionDuration("500ms"); // slower transition
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(Math.round(newIndex));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="whitespace-nowrap ease-in-out transition-all"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transitionDuration: `${transitionDuration}`,
        }}
      >
        {React.Children.map(children, (child: ReactElement) => {
          return React.cloneElement(child);
        })}
      </div>

      {/* Left/Right Buttons */}
      <div className="flex flex-col absolute inset-y-0 left-0 justify-center">
        {activeIndex > 0 && (
          <button
            className="w-10 h-10 border-2 rounded-full hover:bg-white hover:text-black"
            onClick={() => updateIndex(activeIndex - 1)}
          >
            ❮
          </button>
        )}
      </div>
      <div className="flex flex-col absolute inset-y-0 right-0 justify-center">
        {activeIndex < React.Children.count(children) - 1 && (
          <button
            className="w-10 h-10 border-2 rounded-full hover:bg-white hover:text-black"
            onClick={() => updateIndex(activeIndex + 1)}
          >
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
