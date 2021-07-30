import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const MinecraftSisters = () => {
  useEffect(() => {
    var replacers = document.querySelectorAll("[data-replace]");
    for (var i = 0; i < replacers.length; i++) {
      let replaceClasses = JSON.parse(
        (replacers[i] as HTMLElement).dataset.replace.replace(/'/g, '"')
      );
      Object.keys(replaceClasses).forEach(function (key) {
        replacers[i].classList.remove(key);
        replacers[i].classList.add(replaceClasses[key]);
      });
    }
  });

  return (
    <>
      <Head>
        <title>minecraft-sisters - Martin Au-yeung</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="pb-8">
        <Header />
      </div>
      <div
        className="font-poppins pl-12 duration-1000 relative transform transition-all translate-y-96 ease-out container mx-auto"
        data-replace='{"translate-y-96": "translate-y-0" }'
      >
        <div className="md:pl-12 pb-4">
          <Link href="/">
            <div className="text-lg lg:text-lg font-bold hover:text-gray-500 pb-4">
              <p> ↵ back to home</p>{" "}
            </div>
          </Link>
        </div>
        <div className="grid md:grid-cols-9 grid-cols-1 gap-2 space-x-4">
          <div className="md:pl-12 col-span-4 h-36">
            <div className="text-3xl lg:text-3xl w-lg font-bold pb-4 items-center">
              minecraft-sisters
              <div className="space-x-4 items-center justify-center">
                <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                  Python
                </span>
                <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                  Google Cloud Compute Engine
                </span>
              </div>
            </div>
            <p className="pb-4">
              simple lil bot that activates and deactivates a minecraft server.
            </p>
           
          </div>

          <div className="md:pl-8 col-span-4 lg:pt-20 xs:pt-12">
            <div className="pb-4">
              <b>Background</b>
            </div>
            <p className="pb-2">
                I'll fill this out.. eventually... 
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default MinecraftSisters;
