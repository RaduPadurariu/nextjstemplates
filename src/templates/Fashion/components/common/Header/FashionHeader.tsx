import Image from "next/image";
import Link from "next/link";
import React from "react";
import FashionNavbar from "./FashionNavbar";

const FashionHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center pt-8 pb-2 ">
      <div className="">
        <Link href="/fashion">
          <Image
            alt="logo-img"
            src="/images/fashion/logo.png"
            width={234}
            height={101}
            className="w-[180px]"
          />
        </Link>
      </div>
      <FashionNavbar />
    </header>
  );
};

export default FashionHeader;
