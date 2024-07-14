"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../styles/styles.css";

export const ImageChecker = ({
  imageUrl,
  imgWidth,
  imgHeight,
}: {
  imageUrl: string;
  imgWidth: number;
  imgHeight: number;
}) => {
  const [isImageAvailable, setIsImageAvailable] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    checkImageUrl(imageUrl)
      .then((isAvailable) => {
        setIsImageAvailable(isAvailable);
      })
      .catch((error) => {
        console.error("Error checking image URL:", error);
        setIsImageAvailable(false); // Assuming false if error occurs
      });
  }, [imageUrl]);

  const checkImageUrl = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new window.Image(); // Use window.Image to refer to the standard JavaScript Image object
      img.onload = function () {
        resolve(true); // Image loaded successfully
      };
      img.onerror = function () {
        resolve(false); // Image failed to load (404 or other error)
      };
      img.src = url;
    });
  };

  //   if (isImageAvailable === null) {
  //     return <div>Loading...</div>;
  //   } else
  if (isImageAvailable) {
    return (
      <Image
        src={imageUrl || ""}
        alt="image"
        className="rounded-lg"
        width={imgWidth}
        height={imgHeight}
      />
    );
  } else {
    return (
      <div
        className={cn(` bg-dark-gray rounded-lg animate-pulse`)}
        style={{ width: imgWidth, height: imgHeight }}
      ></div>
    );
  }
};
