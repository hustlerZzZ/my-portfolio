import React from "react";
import { experienceType } from "@/data/experience";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EducationCard({ item }: { item: experienceType }) {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="flex flex-col space-y-2">
          <div className="flex flex-col xs:flex-row md:items-center justify-between space-y-1 xs:space-y-0">
            <p className="md:text-2xl">{item.company_name}</p>
            <p className="">{item.location}</p>
          </div>
          <div>
            <p className="md:text-lg">{item.duration}</p>
          </div>
        </CardTitle>
        <CardDescription className="mt-2">
          {item.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-4 items-center">
        <div>Skills</div>
        <div className="flex flex-wrap lg:items-center lg:justify-between space-x-2">
          {item.skills.map((item, index) => (
            <p
              key={index}
              className="border-2 border-orange-600 dark:border-gray-100 px-4 py-1 mt-2 rounded-full text-xs md:text-sm "
            >
              {item}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
