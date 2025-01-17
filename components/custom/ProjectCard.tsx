import { projectType } from "@/data/projects";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdOpenInNew } from "react-icons/md";

import React from "react";

export default function ProjectCard({ data }: { data: projectType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col space-y-2">
          <div className="flex flex-col xs:flex-row md:items-center justify-between space-y-1 xs:space-y-0">
            <p className="text-sm md:text-xl">{data.project_name}</p>
            <div className="flex space-x-2">
              <a
                className="flex items-center justify-center space-x-2"
                href={data.github_url}
              >
                <span>GitHub</span>
                <MdOpenInNew />
              </a>
              {data.live_url.length > 0 && (
                <a
                  className="flex items-center justify-center space-x-2"
                  href={data.live_url}
                >
                  <span>Live</span>
                  <MdOpenInNew />
                </a>
              )}
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex items-center space-x-4">
          {data.project_description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
