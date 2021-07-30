import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const TripSuite = () => {
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
              TripSuite
              <div className="space-x-4 items-center justify-center">
                <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                  React
                </span>
                <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                  Node.js
                </span>
                <span className="transform transition-all duration-150 inline-block bg-green-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-green-900   hover:shadow-sm  hover:scale-105">
                  MongoDB
                </span>
                <span className="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                  Express
                </span>
              </div>
            </div>
            <p className="pb-4">
              I'm literally never doing another 24 hr hackathon again
            </p>
            <b className="pb-1">Role:</b>
            <p className="pb-1">Back-end Developer</p>
            <b className="pb-1">Timeline:</b>
            <p className="pb-1"> NwHacks 2021 (Janurary 2021)</p>
            <b className="pb-1">Team:</b>
            <p className="pb-1"> Me, Naomi Tran, Anthony Mak, Sarah Dang</p>
          </div>
          <div className="col-span-4">
            <iframe
              width="615"
              height="330"
              src="https://www.youtube.com/embed/qGMBlzevLvk"
              title="TripSuite Demo - NwHacks 2021"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:pl-8 col-span-4 lg:pt-20 xs:pt-12">
            <div className="pb-4">
              <b>Background</b>
            </div>
            <p className="pb-2">
              With COVID-19 and travel restrictions across the entire globe, we
              know that many are yearning to travel. Planning trips — more
              specifically, paying for trips — can be quite costly. Especially
              as university students and those looking to save a penny,
              budgeting for a trip can be messy and stressful!
            </p>
            <p>
              Using the popular MERN stack, we used MongoDB's Atlas cloud server
              to store our database. With this stack, we can build a dynamic
              website and implement both the frontend and the backend of our
              project
            </p>
          </div>
          <div className="lg:pt-20 xs:pt-12 col-span-4">
            <div className="pb-8">
              <div className="pb-4">
                <b>What it does?</b>
              </div>
              <p>
                TripSuite is a travel planning app that allows you to calculate
                and create a plan for your next trip! Selecting from an array of
                flights, accommodations and activities, TripSuite calculates the
                overall cost and suggests how much one needs to save each month
                in order to make the trip.
              </p>
            </div>
     
            <div className="pb-8">
              <div className="pb-4">
                <b>Challenges and Accomplishments</b>
              </div>
              <div>
                <p>
                  With the limited time constraint, we were forced to pick and
                  choose which features we wanted to code. As well, we created a
                  Figma to visualize what we wanted the project to look like.
                  However, it wasn't easy to execute that with our stack. This
                  being our first hackathon, we are proud of what we've
                  achieved. Also, we dove into a stack that none of us were
                  completely familiar with. The utilization of a MongoDB as well
                  as churning out an entire UI in 24 hours is no small task! We
                  were all able to step out of our comfort zones and try
                  something we hadn't done before and apply the MERN stack to
                  our own app. We came out knowing more about concepts in
                  database management, user authentication and front-end UI
                  design. We learned a lot about how to design a
                  web app. While some of us worked on the frontend, others
                  worked on the backend and we were able to get a taste of what
                  a software development process is like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripSuite;
