import { fashionContactSocialIcons } from "@/data/fashionData";
import React from "react";
import FashionContactForm from "./FashionContactForm";
import Image from "next/image";

const FashionContact = () => {
  return (
    <section>
      <div className="fashion-container">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h2 className="text-[var(--fashionTextHeading)] text-[28px] md:text-[45px] fashionHeadingFamily font-bold leading-[1.2em]">
              Stay in Touch
            </h2>
            <ul>
              <li className="py-4">
                <h4 className="text-[var(--fashionTextSecondary)] text-xl leading-[1.5em]">
                  Address:
                </h4>
                <p className={`text-sm leading-[21px]`}>
                  Chicago, IL 60606, 123, New Lenox
                </p>
              </li>
              <li className="py-4">
                <h4 className="text-[var(--fashionTextSecondary)] text-xl leading-[1.5em]">
                  Phone:
                </h4>

                <a
                  href="tel:1234567890"
                  className="text-sm leading-[21px] text-[var(--fashionTextSecondary)] cursor-pointer hover:text-black transition-all duration-300 ease-in-out"
                >
                  123-456-7890
                </a>
              </li>
              <li className="py-4">
                <h4 className="text-[var(--fashionTextSecondary)] text-xl leading-[1.5em]">
                  Email:
                </h4>
                <a
                  href="mailto:info@example.com"
                  className={`text-sm leading-[21px] text-[var(--fashionTextSecondary)] cursor-pointer hover:text-black transition-all duration-300 ease-in-out`}
                >
                  info@example.com
                </a>
              </li>
            </ul>
            <ul className="flex pt-2">
              {fashionContactSocialIcons.map((item) => {
                return (
                  <li key={item.id} className="mr-6">
                    <button>
                      <i
                        className={`${item.src} text-2xl text-[#d8d8d8] hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out`}
                      ></i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full md:w-2/3">
            <FashionContactForm />
          </div>
        </div>
        <div className="pt-12">
          <Image
            src="/images/fashion/contact.png"
            width={1920}
            height={909}
            alt="no-contact-img"
            className="mx-auto"
          />
        </div>
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s40.74863094328997,-73.985667!5e0!6i16"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FashionContact;
