import AnimatedLink from "@/components/AnimatedLink";
import { Main, MainHeading } from "@/components/services/Main";
import { SubHeading, SubText } from "@/components/services/Sub";
import { MagicCard } from "@/components/ui/magic-card";
import { services } from "@/data";
import React from "react";

export default function page() {
  return (
    <main className=" ">
      <section className=" py-[10vh] flex flex-col items-center justify-center">
        <MainHeading className={" drop-shadow-[0px_0px_20px_cyan]"}>
          Our Services
        </MainHeading>
        <Main className={"grid lg:grid-cols-3 mt-[4vh]"}>
          {services.map((e, i) => (
            <AnimatedLink href={e.ref} key={i}>
              <MagicCard
                className={
                  "h-[calc(50vh)] text-center flex items-center justify-center"
                }
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="size-[80px]">{e.icon}</p>

                  <SubHeading className={"xl:text-3xl"}>{e.name}</SubHeading>
                  <SubText>{e.description}</SubText>
                </div>
                <p className="text-xl">Learn More </p>
              </MagicCard>
            </AnimatedLink>
          ))}
        </Main>
      </section>
    </main>
  );
}
