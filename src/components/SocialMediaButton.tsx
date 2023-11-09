type Props = {
  text: string;
  icon: React.ReactNode;
  url: string;
};
const SocialMediaButton = ({ url, icon, text }: Props) => {
  return (
    <a href={url} target="_blank" aria-label={text}>
      <span className="inline-flex flex-row items-center gap-2 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
        <span className="text-slate-400">{icon}</span>
      </span>
    </a>
  );
};
export default SocialMediaButton;
