import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

const BioToCsUBC = () => {
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
        <title>Bio to CS @ UBC - Martin Au-yeung's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="How Martin switched into CS from Biology at UBC"></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="pb-8">
        <Header />
      </div>
      <div className="font-poppins max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <div className="max-w-xl container mx-auto">
              <div className="pb-8">
                <div className="pb-4">
                  <Link href="/blog">
                    <div className="text-lg lg:text-lg font-bold hover:text-gray-500 pb-4">
                      <p> ↵ back to blog</p>
                    </div>
                  </Link>
                </div>
                <a href="#">
                  <div className="text-5xl font-bold hover:text-gray-500 pb-4">
                    Switching from Biology to Computer Science @ UBC 🧬
                  </div>
                </a>
                <div className="font-bold text-slate-400 pb-2">
                  How and why I switched from Biology to UBC
                </div>
                <div className="font-bold text-indigo-400 pb-8">
                  Last Updated: January 14th, 2020
                </div>
                <div className="">
                  <div className="font-bold text-3xl pb-4">
                    Introduction
                  </div>
                  <p className="pb-4">
                    My description of my personal experience on switching to CS @ UBC when I was a 3rd year bio student going through a mid-life crisis
                  </p>
                  <p className="pb-4">
                  I often get asked how I did it, the struggles of my transition, and how I was
                    able to start from no experience in tech to interning at LinkedIn in just 2 years.
                  </p>
                  <p className="pb-4">
                  I lied, I actually had a CS background starting from highschool with AP Computer Science, and had been building websites throughout the 3 years I was in Bio.
                  (like this one, but this is the 4th iteration now of the original one) But I had no experience other than that, and this will walk through everything I've learned since. 
                  </p>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  Why ?
                </div>
                <div className="font-bold pt-2 text-xl pb-4">
                  $$$
                </div>
                <p className="pb-4">
                Bruh. Biology or any life sciences (like Integrated Sciences) is actually scuffed when you're looking at job opportunities with just the degree alone.
                If you aren't gunning for med school nursing or other post-graduate opportunites, theres nothing in it here for you as a generalist bachelor's degree. Almost all my friends, that
                graduated with a life science degree @ UBC are pursuing post-graduate opportunities now, either in healthcare @ BCIT/Langara, or writing the LSAT, or doing BCS. I don't think you could thrive
                in Vancouver with just a life sciences bachelors. (keyword: thrive)
                </p>
                <div className="font-bold text-xl pb-4">
                  Ok, hold up, stop. 
                </div>
                <p className="pb-4">
                  Before you read this, and think CS is super easy and for everyone. It's not. Prepare yourself to pull multiple hours outside of school grinding personal projects to put on your resume, doing hours and hours
                  of Leetcode to prepare for interviews for even basic startups. If you don't even have the basic passion for tech, or have an aptitiude for tech, this is not the field for you. I've seen people that fail out of class simply because
                  they just aren't fit for tech and the way of thinking for it. Tech is all about discipline and putting in hours of effort to acheive it. My guide here only serves my experiences in trying to gun for Bay Area Big Tech firms,
                  so you might not have to put as much sweat into doing well. However, do note its not an easy road. I've seen people who have completed bootcamp degrees that are still looking to break into tech.
                  <b> The first job/internship is the hardest one to get</b> as employers want people with experience already. 
                </p>
              </div>
              <div className="pt-4 pb-8">
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  How ?
                </div>
                <div className="font-bold text-xl pb-4">
                  Getting my feet wet
                </div>
                <p className="pb-4">
                  As I was warned about this, I registered in CPSC 103 before making the move to switch to test it out. When I did this, CPSC 103 was not a requirement for me to graduate, but I understand now it is.
                  CPSC 103 I think is a very good course as it offers you insight on what coding is like over CPSC 110 (which imo teaches more CS theory than praticality) So if you like it, great. If you don't, maybe reconsider.
                </p>
                <div className="font-bold pt-2 text-xl pb-4">
                  Degree Options
                </div>
                <p className="pb-4">
                  As I've done Biology for a few years, I didn't want to restart from scratch. I looked into instead programs that offer you the oppourtunity to take CS courses. The option I chose was
                  the Combined Major in Science program as the barrier to entry is just simply asking to get in. However, you have to integrate 3 specialties. So because I had bio credits, I chose to do the Bio x CS x EOSC, as EOSC is the "easiest". 
                  I don't know if that's particularly true if you don't have friends taking EOSC with you though.
                </p>
                <p className="pb-4">
                  Integrated Science is a program I'm familar with that could also be used to do this, and you can forgo doing one less speciality (the Combined Major requires you to do 3) However, it requires writing a through proposal 
                  of why you're chosing to integrate two specialties together. The setback is that they can't really be degrees that exist at UBC iirc. So they could deny you if you were to apply Bio into your integration. 
                  If you were a pre-med prior to this, this program should be very clear with you or your peers. Go ask them.
                </p>
                <p className="pb-4">
                  There's also other programs such as Bio x CS combined, or just switching out entirely to BUCS or CS and forgoing the Bio credits. I don't suggest this but its something to consider. 
                </p>
                <p> 
                You may not even need to do this. I know a friend that works at Microsoft Vancouver with a Biology degree.
                  <b> All that matters is what you do outside of school to build your resume. </b> But, if you are trying to break into the US, they have stricter immigration criteria. It may be needed to have a "technical degree" to 
                  satisfy the requirements for a J-1 intern visa or TN full-time visa. Try and do more research on this.
                </p>
                <div className="font-bold text-xl pt-8 pb-4">
                  Switching into the Combined Major in Science program
                </div>
                <p className="pb-4">
                  For me, it was a fairly straightforward process. <a href="https://cms.science.ubc.ca/switch" className="text-indigo-500">I just applied via the instructions they provided here. </a> 
                  I began the process on Janurary 6th, went to the CMS office hours and was in the program a week later. It was as easy as following the instructions. So if you're planning to switch, make sure to begin 
                  registering for the courses in your package already if you can.
                </p>
                </div>
                <div className="pb-8">
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  What next ?
                </div>
                <div className="font-bold text-xl pb-4">
                  Classes
                </div>
                <p className="pb-4">
                 Once I switched in, it was as easy as just doing the courses themselves. Well, not always. Some of the courses sucked (especially the EOSC ones) as they were just tedious. I found 
                 first-year CS to be OK, as I took CPSC 107 after trying 103 to get credit for 110. I took this simultaneously with 121, which was pretty intense. CPSC 121 I found was very hard, as it was 
                 a new course I wasn't familar at all with anything taught. However, it's a very important course to pass as you'll need it for 221 and 213, which I feel are the most important classes you'll take
                 at UBC for CS as well as 210. Do focus on your CS classes, unlike Bio, you'll actually probably use this information at your future job.
                </p>
                <div className="font-bold text-xl pb-4">
                  Career Grind
                </div>
                <p className="pb-4">
                However, switching into the program isn't enough. You need to do land internships so that you are able to be good when you graduate. (especially with the recession in 2022) You can do this through
                the UBC co-op program, or without it. <a href="/blog/first-internship" className="text-indigo-500">You can read my experiences doing that without the co-op program here.</a>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BioToCsUBC;