"use client";
import Image from "next/image";

const PortalHero = () => {
  return (
    <section id="portalHero">
      <div className="portal-container flex flex-col-reverse md:flex-row justify-between items-center pb-5 min-h-screen">
        <div className="mt-[5%] w-full md:w-1/2">
          <h1 className="font-normal text-5xl md:text-[60px] leading-[70px]">
            Next.js Templates <br />
            with Tailwind CSS
          </h1>
          <p className="my-[40px] text-base md:text-xl opacity-50 font-normal">
            In this project, my challenge was to manage four different templates
            within a single website, where I practiced implementing login and
            dashboard functionality, as well as cart management in a shop
            interface.
          </p>

          <div className="flex flex-col portalHero_btns items-center">
            <button
              onClick={() => {
                document
                  .getElementById("portalTemplates")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-base py-4 px-12 bg-[var(--portalTextPrimary)] text-white cursor-pointer rounded hover:text-[var(--portalTextPrimary)] hover:bg-white border-2 border-white hover:border-[var(--portalTextPrimary)] b"
            >
              Explore Templates
            </button>
            <a
              href="https://radupadurariu2025.netlify.app"
              target="_blank"
              className="text-gray-500 ml-5 py-3 px-8 text-base hover:text-[var(--portalTextPrimary)]"
            >
              Visit Portfolio
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="img relative">
            <Image
              width={1000}
              height={500}
              src="/images/portal/home.png"
              alt="no-home-bg"
              className="max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalHero;
