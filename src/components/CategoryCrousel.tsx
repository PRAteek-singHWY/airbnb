"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const categories = [
  { id: 1, title: "Beachfront", image: "/assets/images/image1.jpg" },
  { id: 2, title: "Cabins", image: "/assets/images/image2.png" },
  { id: 3, title: "Countryside", image: "/assets/images/image3.jpg" },
  { id: 4, title: "Cityscapes", image: "/assets/images/image4.jpg" },
  { id: 5, title: "Desert", image: "/assets/images/image5.jpg" },
  { id: 6, title: "Islands", image: "/assets/images/image6.jpg" },
  { id: 7, title: "Beachfront", image: "/assets/images/image7.jpg" },
  { id: 8, title: "Cabins", image: "/assets/images/image8.jpg" },
  { id: 9, title: "Countryside", image: "/assets/images/image9.jpg" },
  { id: 10, title: "Cityscapes", image: "/assets/images/image10.jpg" },
  { id: 11, title: "Desert", image: "/assets/images/image11.jpg" },
  { id: 12, title: "Islands", image: "/assets/images/image12.jpg" },
  { id: 13, title: "Beachfront", image: "/assets/images/iamge13.jpg" },
  { id: 14, title: "Cabins", image: "/assets/images/image14.jpg" },
  { id: 15, title: "Countryside", image: "/assets/images/image15.jpg" },
  { id: 16, title: "Cityscapes", image: "/assets/images/image16.jpg" },
  { id: 17, title: "Desert", image: "/assets/images/image17.jpg" },
  { id: 18, title: "Islands", image: "/assets/images/image18.jpg" },
];

const CategoryCarousel: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`relative w-full flex items-center overflow-hidden py-4 px-6 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-16 bg-gradient-to-r ${
          isDarkMode ? "from-gray-900" : "from-white"
        } to-transparent z-10 pointer-events-none`}
      />

      <div
        className={`absolute right-[56px] top-0 h-full w-16 bg-gradient-to-l ${
          isDarkMode ? "from-gray-900" : "from-white"
        } to-transparent z-10 pointer-events-none`}
      />

      <button
        onClick={scrollLeft}
        className={`absolute left-20 z-20 bg-transparent backdrop-blur border cursor-pointer ${
          isDarkMode
            ? "border-gray-700 text-red-400 hover:bg-gray-700"
            : "border-gray-300 text-gray-800 hover:bg-white"
        } rounded-full p-2 shadow hover:bg-white transition`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={carouselRef}
        className={`flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth ml-[88px] mr-[50px] max-w-[1172px]`}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={`flex-shrink-0 w-[90px] flex flex-col items-center space-y-1 cursor-pointer group`}
          >
            <div className="relative w-[24px] h-[24px] overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className={`transition-all duration-300 ${
                  isDarkMode ? "filter brightness-0 invert" : ""
                }`}
              />
            </div>

            <p
              className={`text-xs text-center whitespace-nowrap ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              {category.title}
            </p>

            <div
              className={`w-full h-[2px] transition-all ${
                activeId === category.id
                  ? "bg-black"
                  : "group-hover:bg-gray-300 bg-transparent"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className={`absolute right-[392px] z-20 backdrop-blur border cursor-pointer ${
          isDarkMode
            ? "border-gray-700 text-red-400 hover:bg-gray-700"
            : "border-gray-300 text-gray-800 hover:bg-white"
        } rounded-full p-2 shadow bg-transparent hover:bg-white transition`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <button
        className={`absolute right-[18rem] z-20 flex cursor-pointer items-center gap-2 border rounded-[10px] px-4 py-2 ${
          isDarkMode
            ? "border-gray-700 text-red-400 hover:bg-gray-700"
            : "border-gray-300 text-gray-800 hover:bg-gray-50"
        } shadow hover:border-black`}
      >
        <SlidersHorizontal className="w-3 h-7" />
        <span className="text-sm">Filters</span>
      </button>
    </div>
  );
};

export default CategoryCarousel;
