type Props = {
  text?: string;
  icon: React.ReactNode;
  url: string;
};
const SocialMediaButton = ({ url, icon, text }: Props) => {
  return (
    <a href={url} target="_blank">
      <span className="inline-flex flex-row items-center gap-2 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
        <span className="text-slate-400">{icon}</span>
        {text && <span className="text-xs md:text-sm">{text}</span>}
      </span>
    </a>
  );
};
export default SocialMediaButton;
