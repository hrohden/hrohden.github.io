import { WorkExperience } from "../types/WorkExperience";

export const workExperienceItems: WorkExperience[] = [
  {
    company: "Rakuten Rewards",
    title: "Java Developer",
    period: "November 2023 - March 2024",
    description: [
      "Reduced the operational costs by rearchitecting an admin dashboard. Using a connection with a microservices architecture, I’ve moved the functions of managing customers out from a legacy database."
    ],
    logo: "rakuten.png",
    technologies: ["Java", "Spring", "Jenkins", "GitHub Actions", "unit and integration tests"],
  },
  {
    company: "Acorns",
    title: "Full Stack Engineer",
    period: "July 2022 - September 2023",
    description: [
      "Implemented GitHub Action configurations to streamline and automate the version release process for multiple applications, resulting in time and effort savings for the team.",
      "Developed comprehensive admin reports to analyze and track the performance of financial products, providing insights to stakeholders.",
    ],
    logo: "acorns.png",
    technologies: ["Databricks", "Apache Airflow", "Python", "AWS", "SQL"],
  },
  {
    company: "Brigit",
    title: "Full Stack Engineer",
    period: "January 2022 - July 2022",
    description: [
      "Provided backend application support and maintenance, ensuring systems uninterrupted operation.",
      "Developed and maintained mobile applications using React Native.",
    ],
    logo: "brigit.png",
    technologies: ["Java", "Spring Boot", "React", "SQL"],
  },
  {
    company: "Cooperforte Ltda.",
    companyDescription:
      "Cooperforte is a credit union company offering financial solutions exclusively for public and governmental employees.",
    title: "Senior Java developer",
    period: "July 2021 - November 2021",
    description: [
      "Suggested to the team and created the first version of an admin dashboard that consolidates information about the customers (profile info, current investments and loans, and credit score).",
      "Developed and maintained web applications using React, Java, Spring, and Postgres",
    ],
    logo: "cooperforte.png",
    technologies: ["Java", "Spring Framework", "React", "SQL", "Postgres"],
  },
  {
    company: "Stefanini",
    companyDescription:
      "Stefanini is a private Brazilian multinational service and software provider for data processing and consulting, based in São Paulo.",
    title: "Senior developer",
    period: "August 2020 - July 2021",
    description: [
      "Helped the maintenance of a legacy frontend application build with Angular",
      "Developed and maintained web applications for banking corporations, with React, Java, and SQL",
    ],
    logo: "stefanini.png",
    technologies: ["Java", "Angular", "SQL"],
  },
  {
    company: "Basis Tecnologia",
    companyDescription:
      "Basis (basis.com.br) is a renowned IT consulting company that exclusively focuses on developing software solutions for governmental agencies.",
    title: "Senior Java developer",
    period: "December 2019 - August 2020",
    description: [
      "Performed a migration of binary objects stored in database to files saved in an AWS S3 Bucket. This action eliminated shutdown risks (as the binary objects were exposed as byte streams in the API response) and reduced cloud costs",
      "Developed and maintained web applications for governmental departments, using Java (Spring), React, Jenkins, Docker, SQL",
    ],
    logo: "basis.png",
    technologies: ["Java", "Spring", "Jenkins", "OpenShift", "Docker", "Angular", "SQL"],
  },
  {
    company: "Banco do Brasil",
    companyDescription:
      "Banco do Brasil is Latin America's largest commercial bank by assets. Headquartered in Brasília is one of the largest Brazilian companies.",
    title: "Software Developer",
    period: "February 2011 - September 2019",
    description: [
      "Developed an internal web application with fast-updating information about financial products (interest rate, credit limit ranges, among others). The contents were updated by the head office and immediately available to the bank branches nationwide.",
      "That application was built using Java, Spring, and Hibernate, and resulted in +2,500 daily hits, one of the most popular applications in the company’s intranet",
      "Responsible for managing databases and developing internal performance reports of financial products.",
    ],
    logo: "bb.png",
    technologies: ["Java", "Spring", "React", "Angular", "SQL"],
  },
];
