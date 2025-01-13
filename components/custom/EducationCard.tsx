import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { educationType } from "@/data/education";

export default function EducationCard({ item }: { item: educationType }) {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="flex flex-col space-y-2">
          <div className="flex flex-col xs:flex-row md:items-center justify-between space-y-1 xs:space-y-0">
            <p className="text-sm md:text-xl">{item.schoolName}</p>
            <p className="text-sm md:text-xl">{item.location}</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 md:items-center">
            <li className="text-sm md:text-xl">{item.degreeName}</li>
            <li className="text-sm md:text-xl">{item.specialization}</li>
          </div>
        </CardTitle>
        <CardDescription className="flex items-center space-x-4">
          <p>{item.duration}</p>
          <p>{item.location}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
