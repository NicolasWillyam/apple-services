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
import { ImageChecker } from "./image-checker";

const InfiniteCarousel = ({
  service,
  type,
}: {
  service: string;
  type: Services[];
}) => {
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);
  const [imgDuration, setImgDuration] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (service === "square") {
      setImgWidth(236);
      setImgHeight(236);
      setImgDuration(4);
    }

    if (service === "portrait") {
      setImgWidth(220);
      setImgHeight(300);
      setImgDuration(4);
    }
    if (service === "landscape") {
      setImgWidth(419);
      setImgHeight(236);
      setImgDuration(7);
    }
    if (service === "cover") {
      setImgWidth(200);
      setImgHeight(300);
      setImgDuration(4);
    }
  }, [service]);

  const translateX: string =
    `${type.length * (imgWidth + 16) - windowWidth}` + "px";

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
    <div className="w-screen relative overflow-hidden py-4 pb-16 sm:pb-32">
      <AnimatedDiv>
        <div className="w-full flex space-x-4 items-center transition-all">
          {type.map((_, id) => (
            <div key={id} className="flex-shrink-0 item relative">
              <div
                className={cn(
                  `bg-black/50 duration-500 absolute rounded-lg cursor-pointer items-center justify-center flex opacity-0 hover:opacity-100`
                )}
                style={{
                  // service === "portrait" ? 300 : 236,
                  height: imgHeight,
                  width: imgWidth,
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
              <ImageChecker
                imageUrl={_.imgUrl || ""}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
              />
              <div
                style={{ width: imgWidth }}
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
      <div className="sm:hidden w-full h-[1px] bg-light-gray/30 mt-4"></div>
    </div>
  );
};

export default InfiniteCarousel;
