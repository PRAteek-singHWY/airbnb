"use client";

import CategoryCrousel from "@/components/CategoryCrousel";
import Gallery from "@/components/Gallery";
import TopNavigationBar from "@/components/TopNavigationBar";
import { DarkModeProvider } from "../context/DarkModeContext";

export default function Home() {
  return (
    <DarkModeProvider>
      <TopNavigationBar />
      <CategoryCrousel />
      <Gallery />
    </DarkModeProvider>
  );
}
