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
      <div className="w-[600px] mx-auto flex flex-col justify-center items-center gap-5">
        <Image
          src="/images/apple-one.svg"
          alt="apple-one"
          width={120}
          height={44}
        />
        <div className="flex items-center justify-center gap-5">
          {PropsList.map((_, id) => (
            <Image
              key={id}
              src={`/images/${_.src}`}
              alt="apple-tv"
              width={54}
              height={54}
              className="rounded-[14px]"
            />
          ))}
        </div>
        <p className="text-2xl w-[60%] mx-auto tracking-wider leading-[28px] mt-1.5">
          Bundle up to six Apple services and enjoy more for less.
        </p>
        <div className="flex gap-8 text-sm">
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
  );
};

export default ServicesOverview;
