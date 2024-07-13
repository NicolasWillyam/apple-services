"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { IoLogoApple } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Layout from "./layout";

import { menuList } from "../lib/local";
import { List } from "@/lib/props";
import MenuItemsList from "./menu-items-list";
import SearchBoard from "./search-board";

const MenuBar = () => {
  const iconStyle = "mx-2 text-white/80 hover:text-white cursor-pointer";

  const [list, setList] = useState<List[]>([]);
  const [mouseState, setMouseState] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<boolean>(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [height, setHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight);
    }
  }, [mouseState, list]);

  // console.log(height);

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

    const selectedItem = menuList.find((item) => item.name === params);

    if (selectedItem) {
      console.log(selectedItem);
      setList(selectedItem.list);
    } else {
      setList([]); // Handle case where no item is found
    }
  };

  const handleMouseLeave = () => {
    setMouseState(false);
    setSearchState(false);
    setHeight(0);
  };

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
              "h-11 w-full transition-colors duration-300"
            )}
          >
            <Layout>
              <ul className="h-11 flex items-center justify-between gap-2 text-xs font-light tracking-wider ">
                <Fade></Fade>
                <IoLogoApple size={18} className={cn("mb-0.5", iconStyle)} />

                {menuList.map((item, id) => (
                  <li
                    onMouseMove={() => {
                      handleMouse(item.name);
                      setSearchState(false);
                    }}
                    className={cn("h-full flex items-center", iconStyle)}
                    key={id}
                  >
                    {item.name}
                  </li>
                ))}
                <BsSearch
                  size={14}
                  className={cn(iconStyle)}
                  onClick={() => {
                    setSearchState(true);
                    setHeight(400);
                  }}
                  onMouseEnter={() => {
                    setMouseState(false);
                  }}
                />
                <IoBagOutline size={16} className={cn(iconStyle)} />
              </ul>
            </Layout>
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
                    ? "py-10 pb-28 flex gap-10"
                    : "hidden"
                )}
              >
                {searchState == false && <MenuItemsList list={list} />}
                {/* {searchState == true && <SearchBoard />} */}
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
