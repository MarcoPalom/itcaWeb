"use client"
import React from "react";
import MunicipalBillboards from "../../components/municipal-billboards/MunicipalBillboards";
import FestivalLoading from "../../components/FestivalLoading";
import { useFestivalLoading } from "../../hooks/useFestivalLoading";

export default function MunicipalBillboardsPage() {
  const { isLoading, progress, message } = useFestivalLoading({
    initialDelay: 500,
    minLoadingTime: 2000,
    onComplete: () => {
      console.log("Carteleras Municipales cargadas")
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

  return <MunicipalBillboards />;
}
