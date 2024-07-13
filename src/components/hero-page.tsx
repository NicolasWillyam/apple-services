"use client";
import React from "react";
import Layout from "./layout";
import { Fade } from "react-awesome-reveal";

const HeroPage = () => {
  return (
    <Layout>
      <div className="my-24">
        <Fade direction="up">
          <p className="text-8xl leading-[96px] text-center text-white font-bold fade-from-bottom">
            Meet the A-list of entertainment.
          </p>
        </Fade>
        <Fade direction="up">
          <p className="text-2xl leading-[28px] text-center px-16 tracking-wide font-medium mt-6 fade-from-bottom">
            Award‑winning movies. Binge‑worthy shows. Your favorite music
            mastered in Spatial Audio. The most epic collection of mobile games.
            And the world’s largest library of 4K Ultra HD fitness content. The
            best entertainment and experiences live here — only on Apple.
          </p>
        </Fade>
      </div>
    </Layout>
  );
};

export default HeroPage;
