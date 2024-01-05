import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/constants";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* Left side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded">
              Hello There
            </p>
            <h1 className="text-grey">AAS Welcome's you</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quia perferendis est nobis culpa ipsam, quisquam inventore cum
              nemo nisi vel! Asperiores eveniet nesciunt deleniti aliquam, odio
              ipsam rem! Eum.
            </p>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <Link href={"/contact"} className="btn btn-primary">
              <Phone />
              Contact now
            </Link>
            <Link href={"/contact"} className="btn">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image
            src={"/images/hero.png"}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Creative Skills"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia perferendis est nobis culpa ipsam, quisquam inventore cum nemo nisi vel! Asperiores eveniet nesciunt deleniti aliquam, odio ipsam rem! Eum."
        />

        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid grid-cols-[repeat(auto-fit, minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>
              <div className="text-center">
                <h3 className="text-grey-700 mb-2">{skill.name}</h3>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benifits section */}
    </>
  );
};

export default page;
