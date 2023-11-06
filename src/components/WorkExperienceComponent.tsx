import { AiOutlineCalendar } from "react-icons/ai";
import { WorkExperience } from "../types/WorkExperience";

const WorkExperienceComponent = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="min-w-fit">
          <img
            src={`src/assets/logos/${workExperience.logo}`}
            alt=""
            className="rounded-md aspect-square w-14"
          />
        </div>
        <div>
          <p className="text-xs uppercase font-semibold">
            {workExperience.company}
          </p>
          <p className="text-lg font-semibold">{workExperience.title}</p>
          <p className="text-xs flex items-baseline gap-1">
            <AiOutlineCalendar />
            {workExperience.period}
          </p>
        </div>
      </div>
      {workExperience.companyDescription && (
        <p className="text-xs italic">{workExperience.companyDescription}</p>
      )}
      <ul className="list-disc ml-4">
        {workExperience.description.map((description) => (
          <li key={description} className="text-sm">
            {description}
          </li>
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
