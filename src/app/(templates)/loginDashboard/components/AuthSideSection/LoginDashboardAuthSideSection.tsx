import React from "react";

const LoginDashboardAuthSideSection = () => {
  return (
    <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
      <div className="relative flex flex-col justify-center h-full bg-cover px-24 m-4 overflow-hidden bg-[url('/images/loginDashboard/auth-background.jpg')] rounded-xl ">
        <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-500 to-violet-500 opacity-60"></span>
        <h4 className="z-20 mt-12 font-bold text-white text-2xl mb-2">
          &quot;Attention: This is a Fake Login Template&quot;
        </h4>
        <p className="z-20 text-white ">
          Logging in will store your credentials in Local Storage. After
          authentication, you can edit your profile data. This template is for
          demonstration purposes only.
        </p>
      </div>
    </div>
  );
};

export default LoginDashboardAuthSideSection;
