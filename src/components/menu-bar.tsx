"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { IoLogoApple } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Layout from "./layout";
import { TbMenu } from "react-icons/tb";

import "../styles/styles.css";

import { menuList } from "../lib/local";
import { List } from "@/lib/props";
import MenuItemsList from "./menu-items-list";
import SearchBoard from "./search-board";

const MenuBar = () => {
  const iconStyle =
    "mx-3.5 sm:mx-2 text-white/80 hover:text-white cursor-pointer";

  const [list, setList] = useState<List[]>([]);
  const [mouseState, setMouseState] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<boolean>(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [height, setHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);

    if (divRef.current) {
      setHeight(divRef.current.offsetHeight);
    }
  }, [mouseState, list]);

  console.log("height", height);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 0) {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      }
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  const handleMouse = (params: string) => {
    setMouseState(true);
    {
      menuList.map((item, index) => {
        if (item.name == params) {
          setList(item.list);
        }
      });
    }
  };

  const handleMouseLeave = () => {
    setMouseState(false);
    setSearchState(false);
    setHeight(0);
  };

  console.log(windowHeight);

  return (
    <>
      <div className="fixed top-0 w-full transition-all z-10">
        <div
          onMouseLeave={handleMouseLeave}
          className={cn(
            "transition-all duration-500 bg-[#161617]"
            // mouseState ? "h-auto " : "h-0"
          )}
          style={{ height: `${height}px` }}
        >
          <div
            className={cn(
              show ? "bg-dark-gray/0" : "bg-dark-gray/100",
              "h-12 sm:h-11 w-full transition-colors duration-300"
            )}
          >
            <Layout>
              <ul className="h-12 sm:h-11 flex items-center justify-between gap-2 text-xs font-light tracking-wider ">
                <IoLogoApple
                  size={18}
                  className={cn(
                    "mb-0.5 w-[22px] h-[22px] sm:w-[18px] sm:h-[18px]",
                    iconStyle
                  )}
                />

                {menuList.map((item, id) => (
                  <li
                    onMouseMove={() => {
                      handleMouse(item.name);
                      setSearchState(false);
                    }}
                    className={cn(
                      "h-full hidden sm:flex items-center",
                      iconStyle
                    )}
                    key={id}
                  >
                    {item.name}
                  </li>
                ))}
                <div className="flex items-center sm:gap-3">
                  <BsSearch
                    size={14}
                    className={cn(
                      "w-[16px] h-[16px] sm:w-[14px] sm:h-[14px]",
                      iconStyle
                    )}
                    onClick={() => {
                      if (!searchState) {
                        setSearchState(true);
                        setHeight(windowHeight);
                      } else {
                        setSearchState(false);
                        setHeight(0);
                      }
                    }}
                    onMouseEnter={() => {
                      setMouseState(false);
                    }}
                  />
                  <IoBagOutline
                    size={18}
                    className={cn("w-5 h-5 sm:w-[18px] sm:h-[18px]", iconStyle)}
                  />
                  <TbMenu
                    size={18}
                    className={cn(
                      "w-5 h-5 sm:w-[18px] sm:h-[18px] sm:hidden",
                      iconStyle
                    )}
                  />
                </div>
              </ul>
            </Layout>
            {/* <NavigationMenuDemo /> */}
            {/* <Navbar /> */}
          </div>

          <div
            className={cn(
              "w-full text-white tracking-wider transition-all duration-500 ease-in-out",
              mouseState || searchState ? "opacity-100" : "opacity-0"
            )}
          >
            <Layout>
              <div
                ref={divRef}
                className={cn(
                  mouseState || searchState
                    ? "py-10 pb-28 flex gap-10 "
                    : "hidden"
                )}
              >
                {searchState == false && <MenuItemsList list={list} />}
                {searchState == true && <SearchBoard />}
              </div>
            </Layout>
          </div>
        </div>
        <div
          className={cn(
            mouseState ? "opacity-100 h-screen" : "opacity-0",
            "w-full bg-opacity-50 bg-black/20 relative top-0 backdrop-blur-lg -z-10 duration-500"
          )}
        ></div>
      </div>
    </>
  );
};

export default MenuBar;
