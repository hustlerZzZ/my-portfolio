import React from "react";
import { experienceData } from "@/data/experience";
import ExperienceCard from "@/components/custom/ExperienceCard";

export default function ExperienceList() {
  return (
    <>
      {experienceData.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </>
  );
}
