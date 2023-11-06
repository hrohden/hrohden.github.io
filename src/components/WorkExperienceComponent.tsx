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
            className="aspect-square w-14 rounded-md md:w-16"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase md:text-sm">
            {workExperience.company}
          </p>
          <p className="text-lg font-semibold md:text-xl">
            {workExperience.title}
          </p>
          <p className="flex items-baseline gap-1 text-xs md:text-sm">
            <AiOutlineCalendar />
            {workExperience.period}
          </p>
        </div>
      </div>
      {workExperience.companyDescription && (
        <p className="text-xs italic md:text-sm">
          {workExperience.companyDescription}
        </p>
      )}
      <ul className="ml-4 list-disc">
        {workExperience.description.map((description) => (
          <li key={description} className="text-sm md:text-base">
            {description}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {workExperience.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 md:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
export default WorkExperienceComponent;
