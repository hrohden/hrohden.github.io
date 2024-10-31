import { AiOutlineCalendar } from "react-icons/ai";
import { WorkExperience } from "../types/WorkExperience";

const WorkExperienceComponent = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="min-w-fit">
          <img
            src={
              new URL(`../assets/logos/${workExperience.logo}`, import.meta.url)
                .href
            }
            alt=""
            className="aspect-square w-14 rounded-md md:w-16"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 md:text-sm">
            {workExperience.company}
          </p>
          <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 md:text-xl">
            {workExperience.title}
          </p>
          <p className="flex items-baseline gap-1 text-xs text-slate-500 dark:text-slate-400 md:text-sm">
            <AiOutlineCalendar />
            {workExperience.period}
          </p>
        </div>
      </div>
      {workExperience.companyDescription && (
        <p className="text-xs italic text-slate-700 dark:text-slate-300 md:text-sm">
          {workExperience.companyDescription}
        </p>
      )}
      <ul className="ml-4 flex list-disc flex-col gap-2">
        {workExperience.description.map((description) => (
          <li
            key={description.id}
            className={description.highlight ? "text-sm text-slate-700 dark:text-slate-300 md:text-base font-semibold" : "text-sm text-slate-700 dark:text-slate-300 md:text-base"}
          >
            {description.text}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {workExperience.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-gray-50 px-4 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-inset ring-gray-500/10 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-600 md:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
export default WorkExperienceComponent;
