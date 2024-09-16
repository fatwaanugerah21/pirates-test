import React from "react";
import { Input, InputProps } from "./ui/input";
import SearchIcon from "@/icons/search.icon";

interface ISearchInputComponentProps extends InputProps {}

const SearchInputComponent: React.FC<ISearchInputComponentProps> = ({ ...props }) => {
  return (
    <div className={`row dark:bg-slate-400 shadow-md rounded-md w-full`}>
      <SearchIcon className={`fill-input w-9 h-9 px-1`} />
      <Input placeholder="맛집 이름을 검색해보세요" className={`border-none pl-1 dark:bg-slate-400`} {...props} />
    </div>
  );
};
export default SearchInputComponent;
