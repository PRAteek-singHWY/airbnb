"use client";
import React, { useState } from "react";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Search } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
const TopNavigationBar: React.FC = () => {
  const [selected, setSelected] = useState("home");
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  const handleClick = (nav: string) => {
    setSelected(nav);
  };

  return (
    <div
      className={`w-full pb-4 relative z-50 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center relative">
        <div
          className={`w-full flex justify-between items-center px-6 py-3 ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          <Link href="/" passHref>
            <div className="w-[102px] h-[70px] mt-3 ml-[56px]">
              <Image
                src="/assets/Logo.svg"
                alt="Logo"
                width={102}
                height={80}
              />
            </div>
          </Link>

          <div
            className={`mb-6 absolute left-1/2 transform -translate-x-1/2 flex space-x-0.5 ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            <p
              onClick={() => handleClick("home")}
              className={`cursor-pointer whitespace-nowrap text-[16px] px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-0 ${
                selected === "home"
                  ? isDarkMode
                    ? "text-blue-200 font-medium-semi"
                    : "text-gray-700 font-medium-semi"
                  : isDarkMode
                  ? "text-red-400 hover:bg-[rgba(245,244,244,0.8)]"
                  : "text-black hover:bg-[rgba(245,244,244,0.8)]"
              }`}
            >
              Homes
            </p>

            <p
              onClick={() => handleClick("experiences")}
              className={`cursor-pointer whitespace-nowrap text-[16px] px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-0 ${
                selected === "experiences"
                  ? isDarkMode
                    ? "text-blue-200 font-medium-semi"
                    : "text-gray-700 font-medium-semi"
                  : isDarkMode
                  ? "text-red-400 hover:bg-[rgba(245,244,244,0.8)]"
                  : "text-black hover:bg-[rgba(245,244,244,0.8)]"
              }`}
            >
              Experiences
            </p>
          </div>

          <div
            className={`flex mb-6 items-center space-x-[-9px] text-sm ${
              isDarkMode ? "text-white" : "text-gray-700"
            } mr-[56px]`}
          >
            <button
              onClick={toggleDarkMode}
              className={` mr-3 h-[2rem] w-[2rem] rounded-full cursor-pointer ${
                isDarkMode ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            <p className="cursor-pointer font-medium-semi whitespace-nowrap transition-all px-5 py-2.5 rounded-full hover:bg-[rgba(245,244,244,0.8)]">
              Airbnb your home
            </p>

            <GlobeAltIcon className="h-10 cursor-pointer p-2 hover:bg-[rgba(245,244,244,0.8)] rounded-3xl mr-[4px]" />

            <div className="flex h-[3rem] w-[5rem] items-center cursor-pointer border border-gray-200 px-2 py-1 rounded-full space-x-2 hover:shadow-md">
              <Bars3Icon className="h-5 w-5 text-gray-900" />
              <UserCircleIcon
                className={`h-7.5 ${
                  isDarkMode ? "text-gray-900" : "text-white"
                } bg-gray-500 rounded-full`}
              />
            </div>
          </div>
        </div>

        <div
          className={`relative mt-[-1.7rem] bg-white h-[66px] w-[848px] rounded-full shadow-md border border-gray-300 px-7 flex items-center ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex items-center group flex-1">
            <div
              className={`flex flex-1 items-center px-4 py-3 rounded-full cursor-pointer transition-all group-hover:bg-[rgba(245,244,244,0.8)] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              <div className="flex flex-col items-start justify-center">
                <p
                  className={`font-medium-semi text-[12px] ${
                    isDarkMode ? "text-gray-900" : "text-black"
                  }`}
                >
                  Where
                </p>
                <p className="text-[14px] text-gray-600">Search destinations</p>
              </div>
            </div>

            <div
              className={`h-8 border-l border-gray-300 mx-4 transition-all group-hover:opacity-0 ${
                isDarkMode ? "border-gray-600" : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="flex flex-1 items-center">
            {selected === "home" ? (
              <div className="flex flex-1 items-center">
                {/* Check-in */}
                <div className="flex flex-1 items-center">
                  <div
                    className={`flex flex-col items-start justify-center px-4 py-3 rounded-full cursor-pointer transition-all hover:bg-[rgba(245,244,244,0.8)] ${
                      isDarkMode ? "text-gray-900" : "text-black"
                    }`}
                  >
                    <p
                      className={`font-medium-semi text-[12px] ${
                        isDarkMode ? "text-gray-900" : "text-black"
                      }`}
                    >
                      Check in
                    </p>
                    <p className="text-[14px] text-gray-600">Add dates</p>
                  </div>
                </div>

                <div
                  className={`h-8 border-l border-gray-300 mx-4 ${
                    isDarkMode ? "border-gray-600" : "border-gray-300"
                  }`}
                ></div>

                <div
                  className={`px-3 py-2 rounded-full cursor-pointer hover:bg-[rgba(245,244,244,0.8)] transition-all ${
                    isDarkMode ? "text-gray-900" : "text-black"
                  }`}
                >
                  <p
                    className={`font-medium-semi text-[12px] ${
                      isDarkMode ? "text-gray-900" : "text-black"
                    }`}
                  >
                    Check out
                  </p>
                  <p className="text-[14px] text-gray-600">Add dates</p>
                </div>
              </div>
            ) : (
              <div
                className={`px-3 py-2 rounded-full hover:bg-[rgba(245,244,244,0.8)] transition-all ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <p
                  className={`font-medium-semi text-[12px] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Date
                </p>
                <p className="text-[14px] text-gray-600">Add dates</p>
              </div>
            )}
          </div>

          <div
            className={`h-8 border-l flex ml-5 border-gray-300 mx-4 ${
              isDarkMode ? "border-gray-600" : "border-gray-300"
            }`}
          ></div>

          <div className="flex flex-1 cursor-pointer items-center space-x-4 transition-all">
            <div
              className={`px-3 py-2 rounded-full hover:bg-[rgba(245,244,244,0.8)] transition-all ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              <p
                className={`font-medium-semi text-[12px] ${
                  isDarkMode ? "text-gray-900" : "text-black"
                }`}
              >
                Who
              </p>
              <p className="text-[14px] text-gray-600">Add guests</p>
            </div>
          </div>

          <button className="mr-[-19px] p-3.5 bg-red-500 h-[3rem] w-[3rem] text-white rounded-full shadow-sm hover:bg-red-600 transition">
            <Search className="w-4.5 h-4.5 cursor-pointer" />
          </button>
        </div>
      </div>
      <div className=" w-full h-[1px] bg-gray-200 mt-6" />
    </div>
  );
};

export default TopNavigationBar;
