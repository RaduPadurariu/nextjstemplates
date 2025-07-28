import { portalTemplatesList } from "@/data/portalData";
import Image from "next/image";
import Link from "next/link";

const PortalTemplates = () => {
  return (
    <section
      id="portalTemplates"
      className="mt-12 mb-0 w-full h-full bg-no-repeat bg-cover bg-left-[20%] text-center bg-[url('/images/portal/over.png')] py-20"
    >
      <div className="portal-container px-5 py-24 sm:px-24 sm:p-24 rounded bg-white portalTemplates_shadow">
        <div>
          <h1 className="text-center font-normal text-4xl">Templates</h1>
          <p className="font-normal text-center my-5 mx-0 opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {portalTemplatesList.map((template) => {
            return (
              <li key={template.id} className="group mb-5 p-7 rounded">
                <Link
                  href={template.link}
                  className="relative flex justify-center cursor-pointer"
                >
                  <Image
                    width={170}
                    height={170}
                    src={`${template.img}`}
                    alt="no-home-bg"
                  />
                  <i
                    className={`${template.icon} absolute top-[30%] left-0 right-0 text-5xl text-white`}
                  ></i>
                </Link>
                <div>
                  <Link href={template.link}>
                    <h3
                      className={`font-light my-5 mx-0 text-xl ${template.color} transition-colors duration-300`}
                    >
                      {template.title}
                    </h3>
                  </Link>
                  <p className="opacity-50 font-normal">{template.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PortalTemplates;
