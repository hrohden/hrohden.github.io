type Props = {
  title: string;
  company: string;
  period: string;
  children: React.ReactNode;
};
const WorkExperience = ({ title, company, period, children }: Props) => {
  return (
    <div>
      <p>{company}</p>
      <p>{title}</p>
      <p>{period}</p>
      <ul>{children}</ul>
      <p>Technologies employed: AWS, SQL, Databricks, Java, React</p>
    </div>
  );
};
export default WorkExperience;
