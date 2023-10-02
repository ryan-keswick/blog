"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageData {
  path: string;
  alt: string;
  bottomText: String;
}

interface CarouselProps {
  images: ImageData[];
}

export const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-[200px] bg-green-500"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

export const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="overflow-hidden">
      <div
        className="whitespace-nowrap ease-in-out transition-all duration-[1000ms]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div>
        <button onClick={() => updateIndex(activeIndex - 1)}>prev</button>
      </div>
      <div>
        <button onClick={() => updateIndex(activeIndex + 1)}>next</button>
      </div>
    </div>

    //     <div className="w-full h-full relative overflow-x-visible">
    //       <Image
    //         className="object-contain rounded-lg"
    //         src={`/${images[0].path}`}
    //         fill={true}
    //         alt={images[0].alt}
    //       />
    //       <Image
    //         className="object-contain rounded-lg"
    //         src={`/${images[1].path}`}
    //         fill={true}
    //         alt={images[1].alt}
    //       />
    //     </div>
  );
};

export default Carousel;
