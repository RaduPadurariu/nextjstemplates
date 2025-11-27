import { travelInsurance } from "@/data/travelData";
import Image from "next/image";
import React from "react";

const TravelInsuranceDetails = () => {
  return (
    <>
      <section className="py-[120px]">
        <div className="travel-container">
          <ul className="w-full">
            {travelInsurance.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center pb-[120px]"
                >
                  <div
                    className={`overflow-hidden lg:px-[15px] w-full lg:w-1/2 ${
                      item.order === "second" && "order-2"
                    } mb-10 lg:mb-0`}
                  >
                    <Image
                      className="w-full"
                      src={item.src}
                      alt="Insurance Image"
                      width={554}
                      height={568}
                    />
                  </div>
                  <div
                    className={`lg:px-[15px] w-full lg:w-1/2 ${
                      item.order === "second" && "order-1"
                    }`}
                  >
                    <h6 className="uppercase text-sm font-semibold text-[var(--travelTextHeading)]">
                      Need to know
                    </h6>
                    <h1 className="text-4xl text-[var(--travelTextHeading)] my-5 font-semibold">
                      {item.title}
                    </h1>
                    <p className="max-w-[445px] mb-4">
                      Here, I focus on a range of items and features that we use
                      in life without giving them a second thought. such as Coca
                      Cola. Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <div className="p-[30px] max-w-[445px] bg-[#fbfcff]">
                      <ul className="list-image-[url('/images/travel/insurance/bullet.png')]">
                        {item.list?.map((el) => {
                          return (
                            <li
                              key={el.id}
                              className="pl-3 font-medium text-sm mb-[15px] text-[var(--travelTextHeading)]"
                            >
                              {el.text}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TravelInsuranceDetails;
