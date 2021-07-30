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
              hubble
              <div className="space-x-4 items-center justify-center">
                <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                  Flutter
                </span>
                <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                  Firebase
                </span>
                <span className="transform transition-all duration-150 inline-block bg-green-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-green-900   hover:shadow-sm  hover:scale-105">
                  Google Cloud Cloud Functions
                </span>
                <span className="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                  Google Natural Language
                </span>
              </div>
            </div>
            <p className="pb-4">
              hubble was an idea thought of @ 3 am. 2 days before DubHacks 2020.
              "I just wana make friends man I'm so bored in my classes"
            </p>
            <b className="pb-1">Role:</b>
            <p className="pb-1"> Team Lead & Full-Stack Developer</p>
            <b className="pb-1">Timeline:</b>
            <p className="pb-1"> October 2020 (DubHacks 2020) - Present</p>
            <b className="pb-1">Current Team:</b>
            <p className="pb-1"> Me, Linda Ma, Kevin Liang, Sarah Dang</p>
            <b className="pb-1">Former Team Members:</b>
            <p className="pb-1"> Anshay Saboo, Steven Le, Nemo Wax</p>
          </div>
          <div className="col-span-4">
            <iframe
              width="615"
              height="330"
              src="https://www.youtube.com/embed/-GaKWMUCaaM?start=4511"
              title="hubble - Google Cloud Demo"
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
              hubble is a iOS and Android mobile app built with Flutter
              initially for DubHacks 2020, one of the largest 24 hour hackathons
              in the Pacific Northwest. Here, me and Anshay grinded the full 24
              hours to produce a MVP concept of hubble, where I worked on
              building out the NLP scoring algorithm and he worked on the
              front-end, which at the time was written in Swift UI. After I
              slept at 8 am and woke at 2 pm, we found out we won the Google
              Cloud COVID-19 Hackathon fund. This granted us $5000 in Google
              Cloud Credits from Google to continue developing hubble, and well
              have the oppourtunity to work with a SWE @ Google to make our app
              even better.
            </p>
            <p className="pb-2">
              Over the course of the months, from October to April, we slowly
              worked on the app. Old members left hte team due to other
              commitmnets, but I personally wanted to see it through. I worked
              closely with Linda and our Google mentor, Jerry, to rework the
              entire front-end using Flutter from Swift (since I wanted to be
              able to have both iOS and Android users) and worked really hard to
              present to Google at the end of April. I basically touched every
              process of building hubble. Structuring our database on Firebase,
              handling authentication , storing chat messages, working on
              optimizing queries with caching, coming up with the NLP algorithm
              concept and making it real. It was really fun and tiring. I think
              this project really taught me so so so much and I was so glad to
              have the oppourtunity.{" "}
            </p>
            <p className="pb-2">
              Once I finished another MVP model of the app, I presented it to
              Google, where I was judged and placed Top 3. I think this was a
              defining moment for me. I didn't think I'd be able to do something
              so cool within just a year of entering CS, but here I am. I still
              think about like wow, I did this?
            </p>
            <p className="pb-2">
              Right now, I'm working on taking on team members (since I'm not
              limited by Google's rules anymore) to fully flesh out the app and
              deploy it for all NA students. Lots of changes that I'll implement
              in the next few months or so, so just contact me if you wana hear
              about what I'm doing.
            </p>
          </div>
          <div className="lg:pt-20 xs:pt-12 col-span-4">
            <div className="pb-8">
              <div className="pb-4">
                <b>What it does?</b>
              </div>
              <p>
                hubble, in essence, is a social networking app. Users can freely choose who they wish to connect with.
                Our algorithm returns an emoji based on how we think you are compatible with the other user based on your interests, hobbies, clubs and courses.
                😃 - Good Compatibility 😆 - Great Compatibility 🤩 - Amazing Compatibility
                Once you connect with someone, you can chat with them using the built-in chat feature,
                where you can send images about the lab you missed or talk about anything school. (or maybe not).
              </p>
            </div>
            <div className="pb-8">
              <div className="pb-4">
                <b>How did Google Cloud help?</b>
              </div>
              <div>
                <p>
                  Jerry was an amazing mentor who gave us great insight on how to organize our data on Firebase,
                  and how we could optimize queries and save on them by caching our data locally. He's also a pretty cool guy so you can say his coolness made the project a lot more cool.
                  Due to the ability to increase our team size, we were also able to take on a UI designer and another Back-end developer at the beginning of this project
                  (shoutout Sarah Dang, Dang! She's kinda cool and Steven Le, Le best refactorer) to help us with ideating our new design with Flutter and refactoring our algorithm.
                  We were also able to use the funds by spamming the database and cloud functions with queries/invocations. Neat to see how cheap it is to operate Firebase and the NLP though.
                </p>
              </div>
              </div>
              <div className="pb-8">
              <div className="pb-4">
                <b>How it was built</b>
              </div>
              <div>
                <p>
                  hubble was built using Flutter as it's front-end to create an intuitive and user-friendly interface for both iOS and Android users. (no more only iOS!) Our custom matching algorithm was implemented in JavaScript via Node.js hosted on Google Cloud Functions, which calls open Google's Natural Language Processing (NLP) to parse and compare user data.
                  The algorithm then returns scores for each user on the database based on a weighted heuristic from your own data, which is then assigned an emoji for you to see. The database uses Firebase's Cloud Firestore and Cloud Storage to handle data about users!
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hubble;
