import { pageNavs } from "@/lib/navs";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface INavbarComponentProps {}

const NavbarComponent: React.FC<INavbarComponentProps> = ({}) => {
  return (
    <nav className={`hidden sm:row w-full z-50 sticky top-0 bg-background shadow justify-center py-4 space-x-20 sm:px-14`}>
      {pageNavs.map((n, idx) => {
        const isActive = idx === 1;
        const Icon = n.icon;
        return (
          <Link href="#" key={n.label + "navbar"} className={`row`}>
            {!!Icon && <Icon className={clsx({ "stroke-chart-1": isActive })} />}
            <p className={clsx({ "text-chart-1": isActive })}>{n.label}</p>
          </Link>
        );
      })}
    </nav>
  );
};
export default NavbarComponent;
