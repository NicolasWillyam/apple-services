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
      {/* <Container>
        <Categories />
        <HeroPage />
        <div className="w-full bg-dark-gray">
          <Layout>
            <div className="flex h-[148px] items-center justify-between ">
              <Image
                src={"./images/apple-one.svg"}
                alt="apple-one"
                width={123}
                height={40}
              />
              <p className="text-xl tracking-wider font-medium">
                Get up to six services in one subscription with Apple One.
              </p>
              <Button variant="outline">Learn more</Button>
            </div>
          </Layout>
        </div>
        <Services />
        <Footer />
      </Container> */}
    </>
  );
};

export default IndexPage;
