import {
  portalBlogCategories,
  portalContactInfo,
  portalPostsTags,
  portalSocialIcons,
} from "@/data/portalData";
import Image from "next/image";

const PortalFooter = () => {
  return (
    <footer
      id="portalFooter"
      className="pt-16 pb-12 px-0 bg-[var(--portalBackgroundSecondary)] text-white"
    >
      <div className=" portal-container grid gap-10 grid-cols-1 portalFooter__grid">
        <div className="mb-4">
          <Image
            src="/images/portal/logo2.png"
            alt="no-logo"
            width={250}
            height={44}
          />
          <p className="font-medium py-5 px-0 opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <p className="font-medium py-5 px-0 opacity-50">
            © 2025 Radu Padurariu. Inspired by{" "}
            <a
              href="https://www.youtube.com/watch?v=KlnOAIxfZGw"
              target="_blank"
              rel="noopener noreferrer"
            >
              GorkCoder
            </a>
            .
          </p>

          <ul className="flex">
            {portalSocialIcons.map((icon) => {
              return (
                <li key={icon.id}>
                  <i
                    className={`mr-5 opacity-50 ${icon.iconClass} hover:opacity-100`}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-8 text-xl">Post Tags</h3>
          <ul className="flex flex-wrap">
            {portalPostsTags.map((tag) => {
              return (
                <li key={tag.id}>
                  <button className="opacity-50 m-1.5 bg-none outline-none rounded text-white border-white border-2 cursor-pointer py-2 px-8 hover:opacity-100 transition-all duration-500">
                    {tag.tag}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-8 text-xl">Blog Categories</h3>
          <ul>
            {portalBlogCategories.map((blog) => {
              return (
                <li
                  key={blog.id}
                  className="mb-5 opacity-50 cursor-pointer hover:opacity-100 transition-all duration-500"
                >
                  {blog.category}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-8 text-xl">Contact Info</h3>
          <ul>
            {portalContactInfo.map((contact) => {
              return (
                <li
                  key={contact.id}
                  className="mb-5 opacity-50 cursor-pointer hover:opacity-100 flex items-center transition-all duration-500"
                >
                  <i className={`${contact.icon} mr-5`}></i>
                  {contact.info}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default PortalFooter;
