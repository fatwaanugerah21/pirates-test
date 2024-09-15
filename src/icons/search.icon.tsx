// This is an example of using custom svg icon

import React from "react";

const SearchIcon: React.FC<React.SVGAttributes<{ className: string }>> = ({ ...props }) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g>
        <path className="fill-foreground" d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
      </g>
    </svg>
  );
};
export default SearchIcon;
