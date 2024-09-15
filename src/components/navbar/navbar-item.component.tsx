import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface INavbaItemrComponentProps {
  path: string;
  label: string;
  isActive: boolean;
}

const NavItemComponent: React.FC<INavbaItemrComponentProps> = ({ path, label, isActive }) => {
  return (
    <Link className={clsx(`text-letter p-1 text-sm`, { "text-black": isActive, "bg-[rgba(230,230,230,0.5)]": isActive })} href={path} key={"nav" + label}>
      {label}
    </Link>
  );
};
export default NavItemComponent;
