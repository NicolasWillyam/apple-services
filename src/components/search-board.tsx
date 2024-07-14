import { menuList } from "@/lib/local";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BsSearch } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import "../styles/styles.css";
import { IoCloseOutline } from "react-icons/io5";
const SearchBoard = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-full px-12 sm:px-2">
      <Fade>
        <form
          action="submit"
          className="w-full flex gap-3 items-center text-light-gray"
        >
          <BsSearch className="text-light-gray" size={18} />
          <input
            type="text"
            placeholder="Search apple.com"
            className="w-full outline-none text-2xl font-normal tracking-wider bg-dark-gray text-white input-placeholder"
          />
          <IoCloseOutline className="text-light-gray" size={24} />
        </form>

        <div className="mt-10">
          <p className="-ml-2 text-[17px] sm:text-xs sm:font-light tracking-wider text-light-gray mb-2">
            {menuList[0].list[1].name}
          </p>

          <ul>
            {menuList[0].list[1].items.map((_, id) => (
              <Fade key={id} direction="down">
                <li className="sm:-ml-2 w-full flex items-center text-[17px] sm:text-xs tracking-wider font-medium gap-2 py-1.5 sm:p-1 px-2 rounded-sm cursor-pointer text-light-gray hover:text-white hover:bg-light-gray/10 duration-300 my-0.5">
                  <IoArrowForward className="sm:w-2.5 sm:h-2.5 w-4 h-4" />
                  <p className="text-white">{_.name}</p>
                </li>
              </Fade>
            ))}
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default SearchBoard;
