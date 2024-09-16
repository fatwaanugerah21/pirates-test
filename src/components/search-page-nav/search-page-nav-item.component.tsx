import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface ISearchPageNavItemrComponentProps {
  path: string;
  label: string;
  isActive: boolean;
}

const SearchPageNavItemComponent: React.FC<ISearchPageNavItemrComponentProps> = ({ path, label, isActive }) => {
  return (
    <Link className={clsx(`text-letter p-1 text-xs sm:text-sm md:text-base lg:text-lg`, { "text-chart-3": isActive, "bg-[rgba(230,230,230,0.5)]": isActive })} href={path} key={"nav" + label}>
      {label}
    </Link>
  );
};
export default SearchPageNavItemComponent;
