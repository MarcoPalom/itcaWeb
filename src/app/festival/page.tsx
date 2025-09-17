"use client"
import React, { useState } from "react";
import Fastival from "../../components/festival/Fastival";
import FestivalLoading from "../../components/FestivalLoading";
import FestivalWelcome from "../../components/FestivalWelcome";
import FestivalWarningLabel from "../../components/FestivalWarningLabel";
import { useFestivalLoading } from "../../hooks/useFestivalLoading";

export default function FestivalPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2500,
    onComplete: () => {
      // Loading completed
    }
  });

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  if (isLoading) {
    return (
      <FestivalLoading 
        message={message}
        showProgress={true}
        progress={progress}
      />
    );
  }

  return (
    <>
      <FestivalWarningLabel />
      {showWelcome && <FestivalWelcome onComplete={handleWelcomeComplete} />}
      <Fastival />
    </>
  );
} 