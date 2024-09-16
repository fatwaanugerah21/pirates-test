import { searchNavs } from "@/lib/navs";
import React from "react";
import SearchPageNavItemComponent from "./search-page-nav-item.component";

interface INavbarComponentProps {}

const SearchPageNavComponent: React.FC<INavbarComponentProps> = ({}) => {
  return (
    <div className={`justify-between flex space-x-2 sm:justify-center`}>
      {searchNavs.map((n, idx) => {
        return <SearchPageNavItemComponent key={n.path + n.label + "nav-item"} label={n.label} path={n.path} isActive={idx === 0} />;
      })}
    </div>
  );
};
export default SearchPageNavComponent;
