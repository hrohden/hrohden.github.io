type Props = {
  text: string;
  icon: React.ReactNode;
  url: string;
};
const SocialMediaButton = (props: Props) => {
  return (
    <a href={props.url} target="_blank">
      <span className="border border-slate-200 px-3 py-2 bg-slate-100 rounded-md flex flex-row gap-2 items-center">
        <span className="text-slate-400">{props.icon}</span>
        <span className="text-sm">{props.text}</span>
      </span>
    </a>
  );
};
export default SocialMediaButton;
