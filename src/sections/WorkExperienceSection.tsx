import WorkExperienceComponent from "../components/WorkExperienceComponent";
import { workExperienceItems } from "../data/workExperienceItems";

const WorkExperienceSection = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold tracking-tight">Work experience</h2>
      <div className="flex flex-col gap-6">
        {workExperienceItems.map((work) => (
          <WorkExperienceComponent workExperience={work} key={work.company} />
        ))}
      </div>
    </section>
  );
};
export default WorkExperienceSection;
