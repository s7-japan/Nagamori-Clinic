import React from "react";

export default function SectionHeader({heading, subheading}) {

  return (
    <div className="flex flex-col items-center">
      <h1 className="heading-1 sikita">{heading}</h1>
      <div className="h-underline"></div>
      <p className="subheading-1">{subheading}</p>
    </div>
  );
}
