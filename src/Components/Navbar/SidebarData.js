import React from "react";
import AiOutlineHome from "react-icons/ai";
import RiTeamLine from "react-icons/ri";
import AiOutlineSearch from "react-icons/ai";
export const SidebarData = [
  {
    title: "Home",
    Icon: <AiOutlineHome />,
    link: "../Home/index.js",
  },
  {
    title: "About",
    Icon: <RiTeamLine />,
    link: "../About/index.js",
  },
  {
    title: "Search",
    Icon: <AiOutlineSearch />,
    link: "../Search/index.js",
  },
];
