import { BsCloudDownload } from "react-icons/bs";

const HeroActionButton = () => {
  return (
    <p className="text-center">
      <a
        href="https://henriquerohden.s3.amazonaws.com/Resume.pdf"
        download="Resume - Henrique Rohden.pdf"
        target="_blank"
        className="inline-flex w-3/4 items-center justify-center gap-2 rounded-full border-b border-t border-b-sky-700 border-t-sky-300 bg-gradient-to-b from-sky-500 to-blue-600 px-4 py-3 
          text-lg font-semibold text-white shadow-md hover:border-b hover:border-t hover:border-b-sky-600
           hover:border-t-sky-200 hover:bg-gradient-to-b hover:from-sky-400 hover:to-blue-500 focus:ring md:w-1/4"
      >
        <BsCloudDownload className=" text-sky-200" />
        Resumé PDF
      </a>
    </p>
  );
};
export default HeroActionButton;
