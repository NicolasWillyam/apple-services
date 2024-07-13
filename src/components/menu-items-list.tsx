import React, { useState } from "react";
import { menuList } from "../lib/local";
import { List } from "@/lib/props";
import { Fade } from "react-awesome-reveal";

const MenuItemsList = ({ list }: { list: List[] }) => {
  return (
    <>
      {list.map((_, index) => (
        <div className="pl-2" key={index}>
          <div className=" text-[#86868B] text-xs font-light">{_.name}</div>
          <ul className="mt-3 grid grid-cols-1 gap-1.5 ">
            {_.items.map((_, id) => {
              if (index == 0) {
                return (
                  <li key={id}>
                    <Fade direction="down">
                      <p className="text-2xl mr-10 text-white/80 hover:text-white duration-300 cursor-pointer">
                        {_.name}
                      </p>
                    </Fade>
                  </li>
                );
              } else {
                return (
                  <li key={id}>
                    <Fade direction="down">
                      <p className="text-xs my-0.5 text-white/80 hover:text-white duration-300 cursor-pointer">
                        {_.name}
                      </p>
                    </Fade>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MenuItemsList;
