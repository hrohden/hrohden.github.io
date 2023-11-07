type Props = {
  title: string;
  children: React.ReactNode;
};
const Section = (props: Props) => {
  return (
    <section className="flex flex-col gap-6 py-6">
      <h2 className="text-3xl font-semibold tracking-tight">{props.title}</h2>
      {props.children}
    </section>
  );
};
export default Section;
