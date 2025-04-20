"use client";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

interface CardCarouselProps {
  images: string[];
  title: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ images, title }) => {
  const { isDarkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className={`flex flex-col items-center rounded-2xl transition mx-auto relative group w-[290px] h-[305px] ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        {...handlers}
        className="relative w-full h-full cursor-pointer rounded-xl"
      >
        <Image
          src={images[currentIndex]}
          alt={title}
          layout="fill"
          className="rounded-xl transition-all duration-300"
        />
        <button
          onClick={prevImage}
          className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 p-1 ${
            isDarkMode
              ? "bg-gray-800/70 text-white hover:bg-gray-700"
              : "bg-white/70 text-gray-800 hover:bg-white"
          } backdrop-blur rounded-full transition opacity-0 group-hover:opacity-100`}
        >
          <ChevronLeft className="w-4 h-4 cursor-pointer" />
        </button>
        <button
          onClick={nextImage}
          className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 p-1 ${
            isDarkMode
              ? "bg-gray-800/70 text-white hover:bg-gray-700"
              : "bg-white/70 text-gray-800 hover:bg-white"
          } backdrop-blur rounded-full transition opacity-0 group-hover:opacity-100`}
        >
          <ChevronRight className="w-4 h-4 cursor-pointer" />
        </button>
      </div>
      <div className="flex space-x-1 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex
                ? isDarkMode
                  ? "bg-white"
                  : "bg-gray-800"
                : isDarkMode
                ? "bg-gray-600"
                : "bg-gray-400"
            } transition`}
          ></button>
        ))}
      </div>
      <p
        className={`mt-2 text-sm text-center truncate w-full ${
          isDarkMode ? "text-white" : "text-gray-800"
        } font-semibold`}
      >
        {title}
      </p>
    </div>
  );
};

export default CardCarousel;
