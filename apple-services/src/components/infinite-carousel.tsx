"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/styles.css";
import Image from "next/image";
import { Button } from "./ui/button";
import { IoPlayCircle } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { appleTVList } from "@/data/apple-tv";
import { Services } from "@/lib/props";

import styled, { keyframes } from "styled-components";

const InfiniteCarousel = ({
  service,
  type,
}: {
  service: string;
  type: Services[];
}) => {
  const [imgSize, setImgSize] = useState<number>(0);
  const [imgDuration, setImgDuration] = useState<number>(0);

  useEffect(() => {
    if (service === "square" || service === "portrait") {
      setImgSize(236);
      setImgDuration(4);
    }
    if (service === "landscape") {
      setImgSize(419);
      setImgDuration(7);
    }
    if (service === "cover") {
      setImgSize(200);
      setImgDuration(4);
    }
  }, [service]);
  console.log(type.length);

  const translateX: string =
    `${type.length * (imgSize + 16) - window.innerWidth}` + "px";

  console.log(translateX);

  // Define keyframes
  const slideFromRight = keyframes`
    0% {
      transform: translateX(0%);
    }
    99% {
      transform: translateX(calc(-${translateX})); 
    }
    `;
  const AnimatedDiv = styled.div`
    animation: ${slideFromRight} linear infinite;
    animation-duration: calc(${type.length} * ${imgDuration}s);

    &:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <div className="w-screen relative overflow-hidden py-4 pb-32">
      <AnimatedDiv>
        <div className="w-full flex space-x-4 items-center transition-all">
          {type.map((_, id) => (
            <div key={id} className="flex-shrink-0 item relative">
              <div
                className={cn(
                  `bg-black/50 duration-500 absolute rounded-lg cursor-pointer items-center justify-center flex opacity-0 hover:opacity-100 pb-10`
                )}
                style={{
                  // service === "portrait" ? 300 : 236,
                  height: "100%",
                  width: imgSize,
                }}
              >
                <Button>
                  <div className="flex items-center justify-center gap-2 py-0.5">
                    <p className="text-sm font-semibold tracking-wide">
                      Stream Now
                    </p>
                    <IoPlayCircle />
                  </div>
                </Button>
              </div>
              <Image
                src={_.imgUrl || ""}
                alt="image"
                className="rounded-lg"
                width={imgSize}
                height={0}
              />

              <div
                style={{ width: imgSize }}
                className="grid grid-cols-1 gap-1 mt-3"
              >
                <p className="text-sm tracking-wide truncate">{_.title}</p>
                <p className="text-sm tracking-wide text-gray-400 truncate">
                  {_.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default InfiniteCarousel;
