import { searchNavs } from "@/lib/navs";
import React from "react";
import NavItemComponent from "./navbar-item.component";

interface INavbarComponentProps {}

const NavbarComponent: React.FC<INavbarComponentProps> = ({}) => {
  return (
    <div className={`justify-between flex space-x-2`}>
      {searchNavs.map((n, idx) => {
        return <NavItemComponent key={n.path + n.label + "nav-item"} label={n.label} path={n.path} isActive={idx === 0} />;
      })}
    </div>
  );
};
export default NavbarComponent;
