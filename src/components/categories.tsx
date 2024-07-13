"use client";
import { CategoryList } from "@/lib/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Categories = () => {
  return (
    <div className="w-full flex justify-center items-center py-[30px] gap-[30px]">
      {CategoryList.map((_, id) => (
        <Link key={id} href={"/"}>
          <Fade direction="down">
            <div className="flex flex-col items-center gap-2 text-white hover:text-blue-500 cursor-pointer">
              <div className="h-8 w-[54px] flex justify-center items-center">
                <Image
                  src={`./images/${_.icons}`}
                  alt={_.icons}
                  width={_.size}
                  height={_.size}
                />
              </div>
              <div className="text-xs font-light tracking-wider ">{_.name}</div>
            </div>
          </Fade>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
