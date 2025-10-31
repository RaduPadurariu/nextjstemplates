import { portalTechnologiesList } from "@/data/portalData";
import Image from "next/image";

const PortalTechnologies = () => {
  return (
    <section
      id="portalTechnologies"
      className="pb-12 pt-28 bg-[var(--portalBackgroundPrimary)]"
    >
      <div className="portal-container">
        <div>
          <h1 className="font-normal text-center text-4xl">Technologies</h1>
          <p className="text-center my-5 font-normal opacity-50">
            Core technologies used to build and optimize this project.
          </p>
        </div>

        <div className="flex mt-20 flex-col md:flex-row">
          <ul className="grid w-full md:w-1/2 grid-cols-2 gap-5 mr-0 md:mr-5">
            {portalTechnologiesList.map((tech) => {
              return (
                <li key={tech.id}>
                  <div>{tech.icon}</div>
                  <h3 className="font-normal py-5 text-xl">{tech.title}</h3>
                  <p className="font-normal opacity-50">{tech.desc}</p>
                </li>
              );
            })}
          </ul>
          <div className="w-full md:w-1/2 relative pt-20 md:pt-0">
            <div className="bg-no-repeat bg-cover bg-[url('/images/portal/fe1.png')]">
              <Image
                src="/images/portal/fe.png"
                alt="no-img-phone"
                width={533}
                height={421}
                style={{ overflowClipMargin: "content-box" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalTechnologies;
