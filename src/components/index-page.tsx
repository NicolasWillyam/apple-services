/* eslint-disable @next/next/no-img-element */
import React from "react";
import IndexPageHead from "./index-page-head";
import MenuBar from "./menu-bar";
import Container from "./container";
import Categories from "./categories";
import HeroPage from "./hero-page";
import Layout from "./layout";
import Image from "next/image";
import { Button } from "./ui/button";
import Services from "./services";
import Footer from "./footer";

const IndexPage = () => {
  return (
    <>
      <IndexPageHead />
      <MenuBar />
      <Container>
        <Categories />
        <HeroPage />
        <div className="w-full bg-dark-gray py-14 border-t-[1px] border-light-gray/30">
          <Layout>
            <div className="flex sm:h-[148px] items-center justify-between flex-col sm:flex-row text-center gap-6 px-16 sm:px-0">
              <img
                src={"./images/apple-one.svg"}
                alt="apple-one"
                className="sm:w-[123px] sm:h-[40px] h-[28px] w-[87px]"
              />
              <p className="text-[17px] sm:text-xl tracking-wide font-medium">
                Get up to six services in one subscription with Apple One.
              </p>
              <Button className="sm:mb-0 mb-2.5" variant="outline">
                Learn more
              </Button>
            </div>
          </Layout>
        </div>
        <Services />
        <Footer />
      </Container>
    </>
  );
};

export default IndexPage;
