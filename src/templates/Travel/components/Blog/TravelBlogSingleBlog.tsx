import React from "react";
import TravelBlogSideBar from "./TravelBlogSideBar";
import Image from "next/image";
import { TravelSingleBlogType } from "../../types/types";
import { travelSocialIcons } from "@/data/travelData";

const TravelBlogSingleBlog = ({
  singleBlog,
}: {
  singleBlog: TravelSingleBlogType;
}) => {
  return (
    <section className="bg-[#f9f9ff] py-[80px]">
      <div className="travel-container">
        <div className="flex flex-col lg:flex-row">
          <div className="w-2/3">
            <div className="flex flex-wrap mb-[50px]">
              <div className="w-full">
                <div className="">
                  <Image
                    className="w-full"
                    src={singleBlog.src}
                    alt="SingleBlog Image"
                    width={750}
                    height={350}
                  />
                </div>
              </div>

              <div className="w-full md:w-1/4 text-left md:text-right mt-0 lg:mt-[35px] px-0 md:px-[15px]">
                <ul className="mb-[30px] flex flex-wrap md:justify-end ">
                  {singleBlog.tags.map((tag, i) => {
                    return (
                      <li
                        key={i}
                        className="cursor-pointer text-[var(--travelTextHeading)] text-sm hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out"
                      >
                        <button className="cursor-pointer">
                          {tag}
                          {i + 1 < singleBlog.tags.length ? "," + "\u00A0" : ""}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <ul className="grid grid-cols-2 md:grid-cols-1">
                  <li className="mb-4">
                    <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                      {singleBlog.author}
                    </button>
                    <i className="fa fa-user"></i>
                  </li>
                  <li className="mb-4">
                    <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                      {singleBlog.date}
                    </button>
                    <i className="fa fa-calendar"></i>
                  </li>
                  <li className="mb-4">
                    <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                      {singleBlog.views} Views
                    </button>
                    <i className="fa fa-eye"></i>
                  </li>
                  <li className="mb-4">
                    <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                      {singleBlog.comments} Comments
                    </button>
                    <i className="fa fa-comment"></i>
                  </li>
                  <li>
                    <ul className="flex justify-end mr-[-10px]">
                      {travelSocialIcons.map((icon) => {
                        return (
                          <li className="inline-block mb-2.5" key={icon.id}>
                            <i
                              className={`${icon.iconClass} text-[var(--travelTextHeading)] text-sm p-2.5 hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out`}
                            ></i>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-3/4 px-0 md:px-[15px]">
                <h3 className="my-5 text-2xl text-[var(--travelTextHeading)] font-semibold">
                  Astronomy Binoculars A Great Alternative
                </h3>
                <p className="mb-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction.
                </p>
                <p className="mb-4">
                  Boot camps have its supporters and its detractors. Some people
                  do not understand why you should have to spend money on boot
                  camp when you can get the MCSE study materials yourself at a
                  fraction of the camp price. However, who has the willpower to
                  actually sit through a self-imposed MCSE training. who has the
                  willpower to actually sit through a self-imposed
                </p>
                <p className="mb-4">
                  Boot camps have its supporters and its detractors. Some people
                  do not understand why you should have to spend money on boot
                  camp when you can get the MCSE study materials yourself at a
                  fraction of the camp price. However, who has the willpower to
                  actually sit through a self-imposed MCSE training. who has the
                  willpower to actually sit through a self-imposed
                </p>
              </div>
              <div className="w-full">
                <div className="mt-5 p-[30px] bg-white shadow-[-20.84px_21.58px_30px_0px_rgba(176,176,176,0.1)]">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training.
                </div>
                <div className="my-[30px] flex flex-wrap">
                  <div className="w-1/2 ml-[-8px]">
                    <Image
                      className="px-2"
                      src="/images/travel/blog/post-img1.jpg"
                      alt="SinglePost Image1"
                      width={360}
                      height={350}
                    />
                  </div>
                  <div className="w-1/2 mr-[-8px]">
                    <Image
                      className="px-2"
                      src="/images/travel/blog/post-img2.jpg"
                      alt="SinglePost Image2"
                      width={360}
                      height={350}
                    />
                  </div>
                  <div className="w-full mt-[30px]">
                    <p className="mb-4">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower.
                    </p>
                    <p className="mb-4">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="navigation-area">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                  <div className="thumb">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/blog/prev.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="arrow">
                    <a href="#">
                      <span className="lnr text-white lnr-arrow-left"></span>
                    </a>
                  </div>
                  <div className="detials">
                    <p>Prev Post</p>
                    <a href="#">
                      <h4>Space The Final Frontier</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                  <div className="detials">
                    <p>Next Post</p>
                    <a href="#">
                      <h4>Telescopes 101</h4>
                    </a>
                  </div>
                  <div className="arrow">
                    <a href="#">
                      <span className="lnr text-white lnr-arrow-right"></span>
                    </a>
                  </div>
                  <div className="thumb">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/blog/next.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="comments-area">
              <h4>05 Comments</h4>
              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src="img/blog/c1.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h5>
                        <a href="#">Emilly Blunt</a>
                      </h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">
                    <a href="" className="btn-reply text-uppercase">
                      reply
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-list left-padding">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src="img/blog/c2.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h5>
                        <a href="#">Elsie Cunningham</a>
                      </h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">
                    <a href="" className="btn-reply text-uppercase">
                      reply
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-list left-padding">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src="img/blog/c3.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h5>
                        <a href="#">Annie Stephens</a>
                      </h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">
                    <a href="" className="btn-reply text-uppercase">
                      reply
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src="img/blog/c4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h5>
                        <a href="#">Maria Luna</a>
                      </h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">
                    <a href="" className="btn-reply text-uppercase">
                      reply
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src="img/blog/c5.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h5>
                        <a href="#">Ina Hayes</a>
                      </h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">
                    <a href="" className="btn-reply text-uppercase">
                      reply
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="comment-form">
              <h4>Leave a Comment</h4>
              <form>
                <div className="form-group form-inline">
                  <div className="form-group col-lg-6 col-md-12 name">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-12 email">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control mb-10"
                    name="message"
                    placeholder="Messege"
                  ></textarea>
                </div>
                <a href="#" className="primary-btn text-uppercase">
                  Post Comment
                </a>
              </form>
            </div> */}
          </div>
          <div className="w-full lg:w-1/3 px-0 lg:px-[15px]">
            <TravelBlogSideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBlogSingleBlog;
