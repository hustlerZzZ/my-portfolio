import { projectData } from "@/data/projects";
import ProjectCard from "@/components/custom/ProjectCard";

export default function Page() {
  return (
    <main className="container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </div>
    </main>
  );
}
