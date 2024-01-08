import React from "react";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Accordion from "./Accordion";
import { faqs } from "@/constants";

const FaqsSection = () => {
  return (
    <section className="max-width section-padding overflow-hidden">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia perferendis est nobis culpa ipsam, 
          quisquam inventore cum nemo nisi vel! Asperiores eveniet nesciunt deleniti aliquam, odio ipsam rem! Eum."
      />
      <div className="flex flex-col tablet:flex-row gap-5 items-start">
        <div className="box">
            <Accordion data={faqs} />
        </div>
        <div className="box flex flex-col gap-5 tablet:max-w-md">
          <div className="w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2">
            <Star fill="currentColor" size={30} />
          </div>
          <div>
            <h5 className="text-grey-700 mb-2">Still have any questions?</h5>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quia perferendis est nobis culpa ipsam, quisquam inventore cum
              nemo nisi vel!{" "}
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary w-max">Contact Me <ArrowRight /></Link>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
