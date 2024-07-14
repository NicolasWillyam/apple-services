import React from "react";
import Layout from "./layout";
import FooterNotes from "./footer-notes";
import { IoLogoApple } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="w-full bg-dark-gray text-light-gray font-light">
      <Layout>
        <div className="px-4 sm:px-2.5">
          <FooterNotes />
          <div className="w-full h-[1px] bg-light-gray/50 " />
          <div className="py-4 flex items-center gap-1.5">
            <IoLogoApple size={18} />
            <GoChevronRight size={16} />
            <p className="text-xs tracking-wider">Entertainment</p>
          </div>
          <div className="pt-9 pb-3 text-xs tracking-wider">
            <p>
              More ways to shop:{" "}
              <span className="text-blue-500 underline">
                Find an Apple Store
              </span>{" "}
              or <span className="text-blue-500 underline">other retailer</span>{" "}
              near you . Or call 1-800-MY-APPLE.
            </p>
            <div className="w-full h-[1px] bg-light-gray/50 mt-4" />
            <div className="w-full py-4 flex items-center justify-between gap-5">
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
              <p>United States</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
