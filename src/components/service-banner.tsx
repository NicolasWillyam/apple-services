/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Layout from "./layout";
import Image from "next/image";
import InfiniteCarousel from "./infinite-carousel";
import { IoChevronForward } from "react-icons/io5";

import "../styles/styles.css";
import { Banner, Services } from "@/lib/props";
import { cn } from "@/lib/utils";

interface Props {
  appIcon: string;
  appName: string;
  videoUrl?: string;
  title: string;
}

const ServiceBanner = ({ service }: { service: Banner }) => {
  const [checkVid, setCheckVid] = useState<boolean>(true);

  useEffect(() => {
    if (service.videoUrl == null) {
      setCheckVid(false);
    }
  }, [service.videoUrl]);

  return (
    <div className="relative">
      <div className={cn(checkVid ? "absolute" : "block", "w-full top-0")}>
        <Layout>
          <div
            className={cn(
              checkVid ? "h-[550px] py-14 " : "h-auto py-7",
              "flex flex-col justify-end sm:justify-start sm:flex-row sm:items-end gap-10 p-6"
            )}
          >
            <div className="w-3/4 sm:w-2/3">
              <div className="w-full flex gap-2 items-center">
                <img
                  src={`/images/${service.appIcon}`}
                  alt="apple-one"
                  className="sm:rounded-[10px] sm:w-9 sm:h-9 w-7 h-7 rounded-[7px]"
                />
                <p className="text-sm sm:text-[17px]">{service.appName}</p>
                <Button
                  className="flex items-center justify-center sm:gap-1 ml-2"
                  variant={"outline"}
                  size={"icon"}
                >
                  Bundle with
                  <Image
                    src={`/images/apple-one.svg`}
                    alt="apple-one"
                    width={35}
                    height={10}
                    className="mb-0.5"
                  />
                </Button>
              </div>
              <div className="mt-3">
                <p className="text-2xl leading-[28px] sm:text-[40px] sm:leading-[40px] font-semibold sm:font-bold">
                  {service.title}
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex gap-3">
                <Button>
                  <p>{checkVid ? "Try it free" : "Open the app"}</p>
                </Button>
                {checkVid ? (
                  <Button variant={"outline"}>Learn more</Button>
                ) : (
                  <Button
                    className="flex items-center gap-1"
                    variant={"none-outline"}
                  >
                    Learn more
                    <IoChevronForward size={14} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Layout>
      </div>
      {checkVid && (
        <video autoPlay loop muted playsInline className="w-full h-[550px]">
          <source src={service.videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default ServiceBanner;
