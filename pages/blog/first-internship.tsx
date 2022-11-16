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
        <title>Getting my first internship - Martin Au-yeung's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
                    How I landed my first tech internship 👨‍💻
                  </div>
                </a>
                <div className="font-bold text-slate-400 pb-2">
                  My process in landing my first tech internship after switching from Bio.
                </div>
                <div className="font-bold text-indigo-400 pb-8">
                  Last Updated: April 23rd 2021
                </div>
                <div className="">
                  <div className="font-bold text-3xl pb-4">
                    Introduction
                  </div>
                  <p className="pb-4">
                    My description of my personal experience on getting my first internship @ Holmetrics.
                  </p>
                  <p className="">
                    COVID-19 was truly the time chamber of gains. It set the pace of how I was able to land the position. reddit.com/r/csmajors is also a great resource, albeit toxic.
                    Use carefully.
                  </p>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  Why no co-op?
                </div>
                <div className="font-bold pt-2 text-xl pb-4">
                  It's not that helpful. At least at UBC
                </div>
                <p className="pb-4">
                  Lot's of students say UBC co-op is a bad program, so I didn't apply. There are many things to consider such as quality of the job board, and making you sign the first offer. I've had
                  a friend that was interviewing at FAANG and local Vancouver company. Because he recieved the local offer first, he was forced by UBC co-op to sign the offer first. He ended up getting the offer from
                  FAANG as well, but renegeing on a co-op offer kicks you out of the UBC co-op program and gives you an F. Some students still do this, but it may not be worth in your situation (depending on loans, scholarships etc.)
                </p>
                <p className="pb-4">
                  Even if you don't use the job board, if you find a job yourself, you have to report it to co-op, and they charge you fees for it. You also have to do workshops, and assignments etc etc.
                  Its just a lot of hassle for stuff you can do yourself.
                </p>
                <p className="pb-4">
                  However, if you are an international student, you must do co-op to qualify to work in Canada/US. Not doing co-op asssumes you are either a Canadian Citizen or maybe US citizen. Not sure how it works for US tbh.
                </p>
              </div>
              <div className="pt-4 pb-8">
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  Before Applying
                </div>
                <div className="font-bold text-xl pb-4">
                  Building Personal Projects
                </div>
                <p className="pb-4">
                  Employers are looking for experience. But you don't have any. You can show this in the form of personal projects. I built out a simple weather app that shows you if you need to wear a jacket or not.
                  as my first one. Personal projects are the best way to showcase that you have experiences. Focus on building things that will show skills that are relevant to the field of SWE work you're trying to do. For example,
                  front-end? make a personal website. Back-end? make an API. I think the best way to showcase you can do a project tho, is doing full-stack. You'll have to spend a lot of time learning, and just trial and error in building.
                  Just keep building, never settle.
                </p>
                <div className="font-bold pt-2 text-xl pb-4">
                  Hackathons
                </div>
                <p className="pb-4">
                  This is the easiest way to get a project out the door ASAP to put on your resume. You also get the perks of working with others, so you can network with people that could end up being important in the future or now!
                  If you do win, it looks even better on your resume. I found NWhacks by UBC to be beginner friendly, as well as DubHacks from UW. Just try to learn as much as you can.
                </p>
                <div className="font-bold text-xl pt-8 pb-4">
                  Building my resume
                </div>
                <p className="pb-4">
                  For me, I went through several iterations and had many of my peers look through it, as well as reddit. A lot of people fail out at this stage. Because I was aiming for startups, I thought the chance
                  that they would look at my resume (without a bot) would be higher, so I purposely made it nicer.
                </p>
                <img
                  src="/blogImages/first-internship/resume.png"
                  alt="beans"
                  height={850}
                  width={850}
                  className="rounded-xl pt-2 pb-2">
                </img>
                <p>This is what my resume looked like when I was applying in 2020</p>
              </div>
              <div className="pb-8">
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  Applying for Internships
                </div>
                <div className="font-bold text-xl pb-4">
                  What to aim for
                </div>
                <p className="pb-4">
                  I knew the most learning experiences would come from taking ownership of features. The best way to do this by way of my friends was to find early-stage startups that would treat their interns
                  like full-time employees. However, Google STEP, Amazon Propel, Dropbox Launch, Microsoft Explore, etc. would've been better choices for me if selected, but I wasn't. Do look into freshmen programs if you qualify.
                </p>
                <div className="font-bold text-xl pb-4">
                  Venture for Canada
                </div>
                <p className="pb-4">
                  This was an amazing program that targets startups in Canada. I was able to apply here to many tech oppourtunites I would've had trouble finding. This is because VFC sponsors a portion 
                  intern's salary, making it ideal for early-stage startups to participate in. (and get free labour) The application process just requires you to write an short essay of why you want to use the VFC program and I heard back a 2/3 weeks later.
                  <a href="https://ventureforcanada.ca/programs/internship-program" className="text-indigo-500"> You can find more information here. </a> This was how I was able to find my first internship.
                </p>
                <div className="font-bold text-xl pb-4">
                  Leetcode Grind/Interview Grind
                </div>
                <p className="pb-4">
                  Leetcode is something that almost all companies do now. I suggest learning to do Two-sum and other Array/String easies from the the Top 100 Leetcode list. Also, lot of small-companies tend to ask domain-specific questions. For example, 
                  if you are applying for a front-end React position, be sure to understand React concepts will enough conversationally.
                </p>
                <div className="font-bold text-xl pb-4">
                  Just keep applying
                </div>
                <p className="pb-4">
                  A lot of companies won't take a chance on a new CS major. So its imperative that you apply to as many places as you can, even if you don't think you qualify. Let them decide if you qualify, not you. I think I sent around a 100 or so applications before I landed mine, 
                  but I didn't even land mine until end of March that year, and I started my grind in September the previous year. So I was considered "late" in the hiring season to get an offer. Just apply, apply, apply and don't give up until the hiring season is over.
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