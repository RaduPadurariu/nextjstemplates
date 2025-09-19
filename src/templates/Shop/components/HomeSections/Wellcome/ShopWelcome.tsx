import React from "react";

const ShopWelcome = () => {
  return (
    <div className="my-[30px]">
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="m-0 text-[40px] md:text-[50px] uppercase font-bold text-left bg-white py-2.5 pl-0 pr-[30px] tracking-[0.1em]">
          <p className="font-light leading-[1] tracking-normal m-0">
            <strong className="text-[var(--shopTextSecondary)] font-bold ">
              WELCOME
            </strong>{" "}
            TO OUR STORE!
          </p>
        </div>
        <div className="my-[15px]">
          <p className="m-0 leading-[1.5em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Proin euismod sem ut neque bibendum, in fermentum eros
            accumsan. Curabitur efficitur ligula vitae orci tincidunt, nec
            pulvinar sem finibus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Aenean ac risus nec turpis
            efficitur posuere. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed malesuada justo at lorem vestibulum, et semper
            elit aliquam. In feugiat, elit nec viverra fringilla, justo nisl
            dignissim leo, nec tempor tellus turpis sit amet massa. Sed
            malesuada justo at lorem vestibulum, et semper elit aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopWelcome;
