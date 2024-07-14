/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoChevronForward } from "react-icons/io5";

interface Props {
  src: string;
}

const PropsList: Props[] = [
  {
    src: "apple-tv.png",
  },
  {
    src: "apple-music.png",
  },
  {
    src: "apple-fitness.png",
  },
  {
    src: "apple-news.png",
  },
  {
    src: "apple-podcast.png",
  },
  {
    src: "apple-books.png",
  },
];

const ServicesOverview = () => {
  return (
    <div className="w-full mx-auto h-full bg-dark-gray text-center py-16 mb-12">
      <div className="max-w-[600px] mx-auto">
        <Image
          src="/images/apple-one.svg"
          alt="apple-one"
          width={120}
          height={44}
          className="mx-auto"
        />
        <div className="flex flex-col-reverse sm:flex-col  items-center justify-center gap-4 mt-6">
          <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-center gap-6 sm:gap-5 mt-4">
            {PropsList.map((_, id) => (
              <img
                key={id}
                src={`/images/${_.src}`}
                alt="apple-tv"
                width={54}
                height={54}
                className="sm:rounded-[14px] sm:w-[54px] sm:h-[54px] w-[64px] h-[64px] rounded-2xl"
              />
            ))}
          </div>
          <div className="w-full block mx-auto ">
            <p className="text-[17px] sm:text-2xl w-[70%] sm:w-[60%] mx-auto tracking-wider sm:leading-[28px] mt-2 mb-5">
              Bundle up to six Apple services and enjoy more for less.
            </p>
            <div className="flex gap-6 sm:gap-8 text-sm justify-center">
              <Button>
                <p>Try it free</p>
              </Button>
              <Button
                className="flex items-center gap-1"
                variant={"none-outline"}
                size={"none"}
              >
                Learn more
                <IoChevronForward size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
