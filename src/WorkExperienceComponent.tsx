import { WorkExperience } from "./WorkExperience";

const WorkExperienceDescription = ({ ...props }) => {
  return <li>{props.children}</li>;
};

const WorkExperienceComponent = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => {
  return (
    <div>
      <p>{workExperience.company}</p>
      {workExperience.companyDescription && (
        <p>{workExperience.companyDescription}</p>
      )}
      <p>{workExperience.title}</p>
      <p>{workExperience.period}</p>
      <ul>
        {workExperience.description.map((description) => (
          <WorkExperienceDescription>{description}</WorkExperienceDescription>
        ))}
      </ul>
      <ul>
        {workExperience.technologies.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
    </div>
  );
};
export default WorkExperienceComponent;
