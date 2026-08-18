"use client"
import React from "react";
import Festival from "@/components/festival/Festival";
import FestivalLoading from "@/components/FestivalLoading";
import { useFestivalLoading } from "@/hooks/useFestivalLoading";

export default function Home() {
  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2500,
    onComplete: () => {
      // Loading completed
    }
  });

  if (isLoading) {
    return (
      <FestivalLoading 
        message={message}
        showProgress={true}
        progress={progress}
      />
    );
  }

  return <Festival />;
} 