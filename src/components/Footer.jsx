import React from "react";
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

export const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-between gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            illum fuga numquam voluptas nisi eum ducimus reiciendis laborum
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((logo) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={logo.alt}
              >
                <img src={logo.src} alt={logo.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((itemSection) => (
            <div key={itemSection.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {itemSection.title}
              </h4>
              <ul>
                {itemSection.links.map((link, index) => (
                  <li
                    key={link + index}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-600 cursor-pointer"
                  >
                    <a href="#">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};
