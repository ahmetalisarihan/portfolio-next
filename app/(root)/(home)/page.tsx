import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    // hero section
    <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
      {/* Left side */}
      <div className="tablet:w:2/3 mt-10 tablet:mt-0">
        <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
          <p className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded">
            Hello There
          </p>
          <h1 className="text-grey">AAS Welcome's you</h1>
          <p className="text-grey-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
            perferendis est nobis culpa ipsam, quisquam inventore cum nemo nisi
            vel! Asperiores eveniet nesciunt deleniti aliquam, odio ipsam rem!
            Eum.
          </p>
        </div>
        <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
          <Link href={"/contact"} className="btn btn-primary">
            <Phone />
            Contact now
          </Link>
          <Link href={"/contact"} className="btn">
           View Portfolio
           <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
      {/* Right side */}
    </section>
  );
};

export default page;
