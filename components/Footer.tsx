import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a passionate and skilled{" "}
          <span className="text-purple">Web developer </span> to join your
          team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let us collaborate to build amazing web experiences! Feel free to get
          in touch by clicking the &apos;Lets get in touch&apos; button below.
        </p>
        <a href="mailto:avi20802bala@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Avinash Mishra
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <>
              <a href={info.link} target="_blank" key={info.id}>
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <img src={info.img} alt="icons" width={20} height={20} />
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
