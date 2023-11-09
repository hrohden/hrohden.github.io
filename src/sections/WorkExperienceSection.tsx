import Section from "../components/Section";
import WorkExperienceComponent from "../components/WorkExperienceComponent";
import { workExperienceItems } from "../data/workExperienceItems";

const WorkExperienceSection = () => {
  return (
    <Section title="Work experience">
      <div className="flex flex-col gap-9">
        {workExperienceItems.map((work) => (
          <WorkExperienceComponent workExperience={work} key={work.company} />
        ))}
      </div>
    </Section>
  );
};
export default WorkExperienceSection;
