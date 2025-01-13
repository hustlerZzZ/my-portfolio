import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceList from "@/components/custom/ExperienceList";
import EducationList from "@/components/custom/EducationList";

export default function Page() {
  return (
    <main className="container mx-auto px-4 md:px-0">
      <Tabs defaultValue="experience">
        <TabsList>
          <TabsTrigger value="experience">My Experience</TabsTrigger>
          <TabsTrigger value="education">My Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <ExperienceList />
        </TabsContent>
        <TabsContent value="education">
          <EducationList />
        </TabsContent>
      </Tabs>
    </main>
  );
}
