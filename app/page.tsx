import Button from "./components/design/Button";
import Nav from "./components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Nav />
      <div className="flex h-4/5 w-full bg-green-100 pt-14">
        <div className="mx-auto flex w-1/2 flex-col items-center lg:mt-48">
          <h1 className="text-4xl font-bold">
            Live a <span className="underline decoration-blue-300">better</span>{" "}
            life with the help of{" "}
            <span className="text-5xl tracking-wider  decoration-blue-300">
              AI
            </span>
          </h1>
          <p className="mt-8 w-1/2 text-center text-lg">
            Discover how our AI can{" "}
            <span className="font-semibold">simplify</span> complex tasks,
            <span className="font-semibold">reduce</span> costs, and{" "}
            <span className="font-semibold">enhance</span> your decision-making
            capabilities.
          </p>
          <div className="mt-8 flex">
            <Button size="large">Get Started</Button>
            <Button className="ml-4" intent="secondary-outline" size="large">
              Learn More
            </Button>
          </div>
          <div className="mt-16 flex gap-16">
            <div className="w-[300px]">
              <Image
                alt="AI helping with productivity"
                src="/images/simplify.png"
                width={300}
                height={300}
                className="mx-auto rounded-lg  shadow-lg"
              ></Image>
              <h2 className="mt-4 text-xl font-bold">Streamline Your Work.</h2>
              <p className="mt-4">
                Navigate the complexities of modern workflows with our AI-driven
                solutions.
              </p>
            </div>
            <div className="w-[300px]">
              <Image
                alt="AI helping with productivity"
                src="/images/reduce_costs.png"
                width={300}
                height={300}
                className="mx-auto rounded-lg shadow-lg"
              ></Image>
              <h2 className="mt-4 text-xl font-bold">Cut Operational Costs.</h2>
              <p className="mt-4">
                Reduce your overheads significantly by integrating our AI
                solutions into your business processes.
              </p>
            </div>
            <div className="w-[300px]">
              <Image
                alt="AI helping with productivity"
                src="/images/enhance.png"
                width={300}
                height={300}
                className="mx-auto rounded-lg shadow-lg"
              ></Image>
              <h2 className="mt-4 text-xl font-bold">Enhance Productivity.</h2>
              <p className="mt-4">
                Capitalize on our AI's ability to analyze vast amounts of data
                rapidly and provide actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
