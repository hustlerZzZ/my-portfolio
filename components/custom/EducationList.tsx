import React from "react";
import { educationData } from "@/data/education";
import EducationCard from "@/components/custom/EducationCard";

export default function EducationList() {
  return (
    <>
      {educationData.map((item, index) => (
        <EducationCard item={item} key={index} />
      ))}
    </>
  );
}
