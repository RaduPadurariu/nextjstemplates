import React from "react";

const TravelHeadTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex justify-center">
      <div className="pb-[70px]">
        <div className="text-center px-[15px]">
          <h1 className="mb-10 text-4xl text-[var(--travelTextHeading)] font-bold">
            {title}
          </h1>
          <p className="mb-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TravelHeadTitle;
