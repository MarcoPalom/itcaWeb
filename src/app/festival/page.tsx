"use client"
import React from "react";
import Fastival from "../../components/festival/Fastival";
import FestivalLoading from "../../components/FestivalLoading";
import { useFestivalLoading } from "../../hooks/useFestivalLoading";

export default function FestivalPage() {
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

  return <Fastival />;
} 