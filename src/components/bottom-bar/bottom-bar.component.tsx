import React from "react";
import BottomBarItemComponent from "./bottom-bar-item.component";
import { pageNavs } from "@/lib/navs";

interface IBottomBarComponentProps {}

const BottomBarComponent: React.FC<IBottomBarComponentProps> = ({}) => {
  return (
    <div className={`fixed justify-between px-7 py-1 bg-background w-full bottom-0 row p-2 border-t border-input sm:px-20`}>
      {pageNavs.map((n, idx) => {
        return <BottomBarItemComponent icon={n.icon!} isActive={idx === 1} label={n.label} key={n.label} />;
      })}
    </div>
  );
};
export default BottomBarComponent;
