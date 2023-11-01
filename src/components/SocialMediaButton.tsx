type Props = {
  text: string;
  icon: React.ReactNode;
  url: string;
};
const SocialMediaButton = (props: Props) => {
  return (
    <div>
      <a href={props.url} target="_blank">
        {props.icon}
        {props.text}
      </a>
    </div>
  );
};
export default SocialMediaButton;
