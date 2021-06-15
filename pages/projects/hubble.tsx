import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const Hubble = () => {
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
        <title>hubble - Martin Au-yeung</title>
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
        className="pl-16 duration-1000 relative transform transition-all translate-y-96 ease-out"
        data-replace='{"translate-y-96": "translate-y-0" }'
      >
        <div className="md:pl-24 pb-12">
          <Link href="/">
            <div className="text-lg lg:text-lg font-bold hover:text-gray-500 pb-4">
              <p> ↵ back to home</p>{" "}
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-6">
          <div className="md:pl-24 col-span-3 h-36">
            <div className="text-3xl lg:text-3xl w-lg font-bold hover:text-gray-500 pb-4">
              hubble
            </div>
            <p>
              hubble was an idea thought of @ 3 am. 2 days before DubHacks 2020.{" "}
            </p>
            <div className="text-lg lg:text-xl w-lg font-bold hover:text-gray-500 pb-4">
              Stats:
            </div>
            <p>team 4 of for people</p>
            <div className="text-lg lg:text-xl w-lg font-bold hover:text-gray-500 pb-4">
              Stats:
            </div>
            <p className="pb-4">
              Jerry was an amazing mentor who gave us great insight on how to
              organize our data on Firebase, and how we could optimize queries
              and save on them by caching our data locally. He's also a pretty
              cool guy so you can say his coolness made the project a lot more
              cool. Due to the ability to increase our team size, we were also
              able to take on a UI designer and another Back-end developer at
              the beginning of this project (shoutout Sarah Dang, Dang! She's
              kinda cool and Steven Le, Le best refactorer) to help us 
            </p>
          </div>
          <div className="position-relative col-span-3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-GaKWMUCaaM?start=4511"
              title="hubble - Google Cloud Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hubble;
