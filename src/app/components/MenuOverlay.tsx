import React from "react";
import NavLink from "./NavLink";

interface Link {
    path: string;
    title: string;
  }
  interface MenuOverlayProps {
    links: Link[];
  }
  const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return (
      <ul className="flex flex-col py-4 items-center">
        {links.map(({ path, title }, index) => (
          <li key={index}>
            <NavLink href={path} title={title} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default MenuOverlay;