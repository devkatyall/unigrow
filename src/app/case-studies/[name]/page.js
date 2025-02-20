import { MainHeading, Main, MainFlag } from "@/components/services/Main";
import Image from "next/image";

export const metadata = {
  robots: "noindex, nofollow",
};

export default async function page({ params }) {
  const { name } = await params;

  return (
    <main>
      <section>
        <Main className={"items-start"}>
          <div>
            <div>
              <MainFlag className={"ring-0 p-0 uppercase text-lg"}>
                Case Studies
              </MainFlag>
              <MainHeading className="text-start">
                Elite Auto Aesthetics – Web Development & Digital Marketing
              </MainHeading>
            </div>
            <div className=" flex">
              <p className=" border-r-2 pl-2 pr-2 border-white">
                Start Date: 2000-11-11
              </p>
              <p className=" border-r-2 pl-2 pr-2 border-white">
                End Date: 2000-11-11
              </p>
              <p></p>
            </div>
          </div>
        </Main>
      </section>
    </main>
  );
}
