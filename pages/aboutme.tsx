import { Header } from "../components/header";
import Head from "next/head";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About Me - Martin Au-yeung</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="pb-8">
        <Header />
      </div>
      <div className="font-poppins max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <div className="max-w-xl container mx-auto">
              <div className="pb-8">
                <a href="#">
                  <div className="text-3xl lg:text-3xl font-bold hover:text-gray-500 pb-4">
                    My Story into CS 😮‍💨{" "}
                  </div>
                </a>
                <div className="text-lg">
                  <p className="pb-4">
                    {" "}
                    I'm (he/him) an old (21 y/o) 5th year @ UBC majoring in
                    Computer Science, Biological Sciences & Earth, and Ocean
                    Sciences. I recently switched into this program from Biology
                    in January 2020 with the intent to pursue software
                    engineering as a career.
                  </p>

                  <p className="pb-4">
                    {" "}
                    I never considered CS to be something I would pursue
                    full-time, but instead something on the side for fun.
                    However, I realized Biology was wasn't truly what I wanted
                    to do as a full-time career (and it was kinda giving me
                    depression)
                  </p>
                  <p className="pb-4">
                    I was having dinner with a friend of mine (who now works as
                    a SDE @ Amazon) and he made me register for a CS course
                    while I had a mouth full of rice. His argument was: "If
                    you're not even enjoying yourself right now, what do you
                    have to lose to make the jump?" I had already been
                    interested in CS prior (took AP CS in highschool, made a my
                    own website for photography prior) and was really interested
                    in being able to create a product I or someone could use. So
                    I just said, screw it and registered. It ended up being one
                    of my favourite courses I have taken at UBC and ultimately
                    led me to make the jump.
                  </p>
                  <p className="pb-4">
                    Passionate about learning more about development outside of
                    class to accelerate my learning and catch up on what I've
                    "missed", this website is used for me to learn more about
                    front-end web development; and as well showcase the projects
                    that I complete.
                  </p>
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-3xl font-bold hover:text-gray-500 pb-4">
                  Fun Facts 🥳
                </div>
                <div className="text-lg">
                  <p className="pb-4">
                    I really like listening to music while I work. When I'm not
                    working, live music makes it even better (ILLENIUM Ascend
                    Tour/Throwback Sets were amazing) I'd love to share with you
                    the music I like and want to hear what you like. Open to
                    anything.
                  </p>
                  <p className="pb-4">
                    You can probably catch me in my spare time just really doing
                    random things. My projects that I worked with that won
                    awards (hubble and my research paper) I literally just
                    decided I wanted to do it because why not. Moral of the
                    story is just do what you want and try new things and see
                    what happens I guess.
                  </p>
                  <p className="pb-4">
                    Currently Gold 2 in Valorant and peaked Plat 5 in League of
                    Legends. Professional @ dealing with malding teammates.
                    sheeeeesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
