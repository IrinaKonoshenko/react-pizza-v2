import React from "react";
import ContentLoader from "react-content-loader";

export function Skeleton(props) {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="138" cy="128" r="125" />
      <rect x="-1" y="276" rx="10" ry="10" width="280" height="24" />
      <rect x="2" y="317" rx="10" ry="10" width="280" height="88" />
      <rect x="5" y="454" rx="10" ry="10" width="95" height="30" />
      <rect x="127" y="447" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
  );
}
