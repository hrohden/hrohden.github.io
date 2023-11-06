import { WorkExperience } from "../types/WorkExperience";

const WorkExperienceComponent = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <img
            src={`src/assets/logos/${workExperience.logo}`}
            alt=""
            className="rounded-md aspect-square w-12"
          />
        </div>
        <div>
          <p className="">{workExperience.company}</p>
          <p className="">{workExperience.title}</p>
          <p>{workExperience.period}</p>
        </div>
      </div>
      {workExperience.companyDescription && (
        <p className="">{workExperience.companyDescription}</p>
      )}
      <ul className="list-disc ml-4">
        {workExperience.description.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        {workExperience.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
export default WorkExperienceComponent;
