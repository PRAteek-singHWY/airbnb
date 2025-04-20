"use client";
import CardCarousel from "./Card";
import { useDarkMode } from "../context/DarkModeContext";

const Gallery = () => {
  const { isDarkMode } = useDarkMode();
  const cardData = [
    {
      id: 1,
      title: "Beachfront",
      images: [
        "/assets/images/image_1.avif",
        "/assets/images/image_1_1.avif",
        "/assets/images/image_1_2.avif",
      ],
    },
    {
      id: 2,
      title: "Gujarat",
      images: [
        "/assets/images/image_2.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 3,
      title: "Barley",
      images: [
        "/assets/images/image_3.jpeg",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_3_2.webp",
      ],
    },
    {
      id: 43634,
      title: "Kerala",
      images: [
        "/assets/images/image_4.avif",
        "/assets/images/image_4_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 643573,
      title: "Ooty",
      images: [
        "/assets/images/image_5.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 65475,
      title: "Goa",
      images: [
        "/assets/images/image_6.avif",
        "/assets/images/image_4_1.avif",
        "/assets/images/image_3_2.avif",
      ],
    },
    {
      id: 7547,
      title: "Nandi hills",
      images: [
        "/assets/images/image_7.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_3_2.webp",
      ],
    },
    {
      id: 757,
      title: "Pune",
      images: [
        "/assets/images/image_8.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 252,
      title: "Karnataka",
      images: [
        "/assets/images/image_9.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 363,
      title: "Kerala",
      images: [
        "/assets/images/image_10.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 6547,
      title: "Ooty",
      images: [
        "/assets/images/image_5.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 68768,
      title: "Goa",
      images: [
        "/assets/images/image_6.avif",
        "/assets/images/image_4_1.avif",
        "/assets/images/image_3_2.avif",
      ],
    },
    {
      id: 654,
      title: "Nandi hills",
      images: [
        "/assets/images/image_7.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_3_2.webp",
      ],
    },
    {
      id: 87657,
      title: "Pune",
      images: [
        "/assets/images/image_8.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 464,
      title: "Karnataka",
      images: [
        "/assets/images/image_9.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 5446,
      title: "Kerala",
      images: [
        "/assets/images/image_10.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 18,
      title: "Karnataka",
      images: [
        "/assets/images/image_9.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 35,
      title: "Kerala",
      images: [
        "/assets/images/image_10.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_4_2.avif",
      ],
    },
    {
      id: 34,
      title: "Ooty",
      images: [
        "/assets/images/image_5.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 64,
      title: "Goa",
      images: [
        "/assets/images/image_6.avif",
        "/assets/images/image_4_1.avif",
        "/assets/images/image_3_2.avif",
      ],
    },
    {
      id: 6423573,
      title: "Ooty",
      images: [
        "/assets/images/image_5.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
    {
      id: 65442475,
      title: "Goa",
      images: [
        "/assets/images/image_6.avif",
        "/assets/images/image_4_1.avif",
        "/assets/images/image_3_2.avif",
      ],
    },
    {
      id: 75474,
      title: "Nandi hills",
      images: [
        "/assets/images/image_7.avif",
        "/assets/images/image_2_1.avif",
        "/assets/images/image_3_2.webp",
      ],
    },
    {
      id: 75237,
      title: "Pune",
      images: [
        "/assets/images/image_8.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },

    {
      id: 75,
      title: "Scotland Edinburgh",
      images: [
        "/assets/images/image_5.avif",
        "/assets/images/image_3_1.avif",
        "/assets/images/image_2_2.avif",
      ],
    },
  ];

  return (
    <div
      className={`flex ml-[27px] mr-[35px] flex-wrap max-h-screen  max-w-screen p-6 gap-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {cardData.map((card) => (
        <CardCarousel key={card.id} title={card.title} images={card.images} />
      ))}
    </div>
  );
};

export default Gallery;
