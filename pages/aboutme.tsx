import { Header } from "../components/header";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import { Footer } from "../components/footer";

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
                <div className="pb-4">
                  <Link href="/">
                    <div className="text-lg lg:text-lg font-bold hover:text-gray-500 pb-4">
                      <p> ↵ back to home</p>{" "}
                    </div>
                  </Link>
                </div>
                <a href="#">
                  <div className="text-3xl lg:text-3xl font-bold hover:text-gray-500 pb-4">
                    me {" "}
                  </div>
                </a>
                <div className="text-lg">
                  <p className="pb-4">
                    I'm Martin (he/him), a 23 y/o UBC graduand that majored in
                    Computer Science, Biological Sciences & Earth, and Ocean
                    Sciences. I switched into this program from Biology
                    in January 2020 with the intent to pursue software
                    engineering as a career, and after a 3 year journey,
                    I found myself as a SWE Intern @ LinkedIn on the
                    Deep Learning Training Platform team as part of the Machine Learning
                    Infrastructure org. You can read about my journey here in my blog.
                  </p>
                </div>
                <div className="pb-8">
                  <Link href="/martin-auyeung-resume.pdf">
                    <a className="text-lg hover:text-gray-900 text-blue-800">
                      if you're here to stalk my tech stuff, click here for my resume.
                    </a>
                  </Link>
                </div>
                <Image
                  src="/aboutmeImages/me.jpg"
                  alt="beans"
                  height={1800}
                  width={1400}
                  className="rounded-lg"
                />
                <p className="text-sm pt-2 text-center">
                  me in SF
                </p>
              </div>
              <div>
                <div className="text-3xl lg:text-3xl font-bold hover:text-gray-500 pb-4">
                  music
                </div>
                <div className="text-lg">
                  <p className="pb-4">
                    I grew up playing piano (15 years), so I'm just a sucker for good music. That led to my
                    current passion for electronic dance music. Where my passion for it so strong I managed to get
                    half the linkedin intern cohort into it too LOOOL. (they be dragging me to the shows when I visit :0) When I'm not
                    working, I love going to live shows.  Here are my top 10 favourite events ranked:
                  </p>
                  <ol className="list-decimal pl-12">
                    <li>Second Sky 2022 (Porter Robinson) - Bay Area</li>
                    <li>ILLENIUM Ascend Tour 2019 - Vancouver</li>
                    <li>ILLENIUM Throwback Set 2019 w/ Said the Sky - WaMu Theatre</li>
                    <li>EDC Vegas 2022</li>
                    <li>Armin Van Buuren 2019 - PNE Forum</li>
                    <li>Martin Garrix @ Brooklyn Mirage 2022</li>
                    <li>EZOO NYC 2022 </li>
                    <li>Coachella 2023</li>
                    <li>Porter Robinson @ Wet Republic</li>
                    <li>Gareth Emery Presents: LSR/CITY Vegas</li>
                  </ol>
                  <p className="pt-4 pb-8">
                    And here some photos of my crews:
                  </p>
                  <div>
                    <Image
                      src="/aboutmeImages/ezoo.jpg"
                      alt="beans"
                      height={570}
                      width={830}
                      className="rounded-lg"
                    />
                    <p className="text-sm pb-8 text-center">
                      Electric Zoo NYC 2022
                    </p>
                    <Image
                      src="/aboutmeImages/ss.jpg"
                      alt="beans"
                      height={570}
                      width={830}
                      className="rounded-lg"
                    />
                    <p className="text-sm pb-8 text-center">
                      Second Sky 2022
                    </p>
                    <Image
                      src="/aboutmeImages/coachella.jpg"
                      alt="beans"
                      height={1500}
                      width={2000}
                      className="rounded-lg"
                    />
                    <p className="text-sm pb-8 text-center">
                      Coachella 2023
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-3xl font-bold hover:text-gray-500 pb-4">
                  food
                </div>
                <p className="pb-4 text-lg">
                  I got a huge passion for food. I'm not picky bout food but if it doesn't taste good
                  I'm not a happy man LOL. When I had my own place, I cooked for others. Here are some events I would do:
                </p>
                <div>
                  <Image
                    src="/aboutmeImages/everyoneeat.jpg"
                    alt="beans"
                    height={1900}
                    width={2900}
                    className="rounded-2xl"
                  />
                  <p className="text-sm pb-8 text-center">
                    boodle fight for my last night in SF
                  </p>
                  <Image
                    src="/aboutmeImages/steak.jpg"
                    alt="beans"
                    height={3900}
                    width={2900}
                    className="rounded-2xl"
                  />
                  <p className="text-sm pb-8 text-center">
                    KR pork belly & steak night - first dinner i hosted
                  </p>
                  <Image
                    src="/aboutmeImages/bbq.jpg"
                    alt="beans"
                    height={2000}
                    width={3000}
                    className="rounded-2xl"
                  />
                  <p className="text-sm pb-8 text-center">
                    bbq night pre-run before boodle fight
                  </p>
                  <Image
                    src="/aboutmeImages/boysnight.jpg"
                    alt="beans"
                    height={1400}
                    width={1400}
                    className="rounded-2xl"
                  />
                  <p className="text-sm pb-8 text-center">
                    steak night & migoreng w/ egg
                  </p>
                  <Image
                    src="/aboutmeImages/hotpot.jpg"
                    alt="beans"
                    height={3900}
                    width={2900}
                    className="rounded-lg"
                  />
                  <p className="text-sm pb-8 text-center">
                    hotpot night
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
