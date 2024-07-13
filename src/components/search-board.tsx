import { menuList } from "@/lib/local";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BsSearch } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import "../styles/styles.css";

const SearchBoard = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-full px-2">
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
        </form>

        <div className="mt-10">
          <p className="text-xs font-light tracking-wider text-light-gray mb-2">
            {menuList[0].list[1].name}
          </p>

          <ul>
            {menuList[0].list[1].items.map((_, id) => (
              <Fade key={id} direction="down">
                <li className="-ml-2 w-full flex items-center text-xs tracking-wider font-medium gap-2 p-1 px-2 rounded-sm cursor-pointer text-light-gray hover:text-white hover:bg-light-gray/10 duration-300 my-0.5">
                  <IoArrowForward size={10} />
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
