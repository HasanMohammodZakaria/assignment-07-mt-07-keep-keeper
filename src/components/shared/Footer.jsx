import React from "react";
import FooterLogo from "../../assets/logo-xl.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] mt-16 md:mt-20">
      <div className="max-w-277.5 mx-auto px-4 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 border-b border-gray-600 flex flex-col items-center text-center">
        <img src={FooterLogo} alt="Footer-logo" className="w-40 md:w-48" />

        <p className="text-white mt-4 text-sm md:text-base max-w-150">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="text-lg md:text-[20px] font-medium text-white mt-6">
          Social Links
        </h3>

        <div className="flex gap-4 mt-4">
          <img
            src={Instagram}
            alt="Instagram-logo"
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer"
          />
          <img
            src={Facebook}
            alt="Facebook-logo"
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer"
          />
          <img
            src={Twitter}
            alt="Twitter-logo"
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer"
          />
        </div>
      </div>

      <div className="max-w-277.5 mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 py-4 text-center md:text-left">
        <p className="text-[#FAFAFA] text-sm md:text-base">
          © 2026 KeenKeeper. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <p className="text-[#FAFAFA] text-sm md:text-base cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-[#FAFAFA] text-sm md:text-base cursor-pointer">
            Terms of Service
          </p>
          <p className="text-[#FAFAFA] text-sm md:text-base cursor-pointer">
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
