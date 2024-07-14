/* eslint-disable @next/next/no-img-element */
"use client";
import { CategoryList } from "@/lib/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Categories = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex items-center justify-center sm:hidden w-9 h-24 border-r-[1px] border-light-gray/50 text-light-gray ">
        <GoChevronLeft size={24} />
      </div>
      <div className="w-full flex items-center sm:justify-center py-[30px] gap-[30px] overflow-x-auto relative px-1.5">
        {CategoryList.map((category, id) => (
          <Link key={id} href="/">
            <Fade direction="down">
              <div className="flex flex-col items-center gap-2 text-white hover:text-blue-500 cursor-pointer">
                <div className="h-8 w-[54px] flex justify-center items-center overflow-hidden">
                  <img
                    src={`./images/${category.icons}`}
                    alt={category.icons}
                    width={category.size}
                    height={category.size}
                  />
                </div>
                <div className="text-xs font-light tracking-wider whitespace-nowrap md:whitespace-normal">
                  {category.name}
                </div>
              </div>
            </Fade>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center sm:hidden w-9 h-24 border-l-[1px] border-light-gray/50 text-light-gray ">
        <GoChevronRight size={24} />
      </div>
    </div>
  );
};

export default Categories;
