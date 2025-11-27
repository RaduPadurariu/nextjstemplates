import { fashionNavLinks } from "@/data/fashionData";
import React from "react";
import FashionActiveLink from "./FashionActiveLink";

const FashionNavList = ({
  setNavOpen,
  variant,
}: {
  setNavOpen?: (value: boolean) => void;
  variant: "header" | "footer";
}) => {
  return (
    <ul
      className={
        variant === "header"
          ? "flex flex-col md:flex-row"
          : "flex flex-row flex-wrap justify-center"
      }
    >
      {fashionNavLinks.map((link) => (
        <FashionActiveLink
          key={link.id}
          link={link}
          setNavOpen={setNavOpen}
          variant={variant}
        />
      ))}
    </ul>
  );
};

export default FashionNavList;
