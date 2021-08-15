import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Statstify = () => {
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
        <title>Statstify - Martin Au-yeung</title>
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
               Statstify 
               <FontAwesomeIcon icon={['fab', 'facebook']} />
               <div className="space-x-4 items-center justify-center">
              <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                React
              </span>
              <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                Node.js
              </span>
              <span className="transform transition-all duration-150 inline-block bg-green-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-green-900   hover:shadow-sm  hover:scale-105">
                Spotify API
              </span>
              </div>
            </div>
            <p className="pb-4">
              I wanted to make a spotify app that showed my throwback songs and tell me a lot more about how I listen, so I did just that.
            </p>
            <b className="pb-1">Timeline:</b>
            <p className="pb-1">Spent about a week in Late August 2020</p>
          </div>
          <div className="position-relative col-span-4">
          
          </div>
          <div className="md:pl-8 col-span-4 pt-12">
            <div className="pb-4">
              <b>How it works:</b>
            </div>
            <p className="pb-2">
              haha... ill fill this out ... sometime
  
            </p>
            <p className="pb-2"></p>
            <p className="pb-2"></p>
            <p className="pb-2"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statstify;
