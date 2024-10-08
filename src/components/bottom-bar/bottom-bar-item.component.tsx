import clsx from "clsx";
import React from "react";

interface IBottomBarItemComponentProps {
  isActive: boolean;
  label: string;
  icon: React.FC<React.SVGAttributes<{ className: string }>>;
}

const BottomBarItemComponent: React.FC<IBottomBarItemComponentProps> = ({ isActive, label, icon: Icon }) => {
  return (
    <div className={`flex flex-col items-center space-y-1`}>
      <Icon className={clsx(`w-4 h-4`, { "stroke-chart-1": isActive, "stroke-foreground": !isActive })} />
      <p className={clsx(`text-xs`, { "text-chart-1": isActive, "text-foreground": !isActive })}>{label}</p>
    </div>
  );
};
export default BottomBarItemComponent;
