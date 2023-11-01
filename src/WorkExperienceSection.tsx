import WorkExperienceComponent from "./WorkExperienceComponent";
import { workExperienceItems } from "./workExperienceItems";

const WorkExperienceSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-semibold tracking-tight">Work experience</h2>
      <div className="flex flex-col gap-6">
        {workExperienceItems.map((work) => (
          <WorkExperienceComponent workExperience={work} key={work.company} />
        ))}
      </div>
    </section>
  );
};
export default WorkExperienceSection;
