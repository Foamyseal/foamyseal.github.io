import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from 'next/image';
const LinkedIntern = () => {
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
                <title>My Internship Experience @ LinkedIn - Martin Au-yeung's Blog</title>
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
                                        My SWE Internship Experience @ LinkedIn
                                    </div>
                                </a>
                                <div className="font-bold text-slate-400 pb-2">
                                    How I recieved the highest performance rating return offer and my general thoughts working @ LinkedIn
                                </div>
                                <div className="font-bold text-indigo-400 pb-8">
                                    Posted: July 14th, 2023
                                </div>
                                <div>
                                    <div className="font-bold text-3xl pb-4">
                                        Introduction
                                    </div>
                                    <p className="pb-8">
                                        This past winter, I worked as a software engineer intern on the Machine Learning Infra,
                                        Deep Learning Training Platform team. Here, I cover topics about how I got the internship, the stuff I worked on, how performance was evaluated and my tips for success.
                                        If this post helps you, shoot me a message on LinkedIn!!
                                    </p>
                                    <div className="pb-8">
                                        <Image
                                            src="/blogImages/linkedin/intern-pic.jpg"
                                            alt="beans"
                                            height={570}
                                            width={830}
                                            className="rounded-2xl pr-4"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            The LinkedIn SWE Intern Winter 2022 Cohort on the 1st day
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-8">
                                    <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                                        How I got the job
                                    </div>
                                    <p className="pb-4">
                                        Lets first talk about how I got the internship. I was reached out by a recruiter on LinkedIn (LOL) and was asked to enter their recruiting pipeline
                                        as they liked my LinkedIn profile. Below was what my interview process was like. My only advice to get into the process is to have a good LinkedIn profile,
                                        cause you never know when a recruiter might reach out! Otherwise, from what I talked to the other interns, they mostly cold-applied, so it’s not the
                                        end of the world if you don’t get reached out. We were told during orientation that there were over 10k applicants, and our cohort was 24 people. So be proactive with
                                        all possible avenues of entry as it’s extremely competitive!
                                    </p>
                                    <div className="pb-8">
                                        <div className="font-bold text-xl pb-4">
                                            The Interview Process
                                        </div>
                                        <ol className="list-decimal pl-8">
                                            <li>Hackkerank Online Assessment (OA)</li>
                                            <li>Recruiter Phone Screen</li>
                                            <li>Virtual Onsite
                                                <ol className="list-decimal pl-4">
                                                    <li>Technical Interview (1x45 min)</li>
                                                    <li>Manager Behavioural (1x60 min) </li>
                                                </ol>
                                            </li>
                                            <li>Host Manager Call</li>
                                            <li>Offer!!</li>
                                        </ol>
                                    </div>
                                    <div className="text-xl font-bold hover:text-gray-500 pb-4">
                                        Round 1: OA
                                    </div>
                                    <p className="pb-4">
                                        After being contacted by a recruiter POC, I was sent a OA to complete. This consisted of 2 questions,
                                        one non-leetcode straightforward progamming question, 1 medium leetcode-style question to be completed
                                        in 90 minutes. To be considered for the next round, all test cases must be passed.
                                    </p>
                                    <div className="text-xl font-bold hover:text-gray-500 pb-4">
                                        Round 2: Recruiter Phone Screen
                                    </div>
                                    <p className="pb-4">
                                        Once I finished the OA, I notified my recruiter and was given times to set up a quick phone call (30 minutes)
                                        This phone call consisted of general logistic questions (expected graduation year, do you require visa sponsorship etc.)
                                        and some overall general behavioural questions (why LinkedIn, tell me about yourself) Be yourself and be genuine!
                                        My recruiter notified me at the end of the call I’d be moving on to the onsite, and to expect an email to set up the times.
                                    </p>
                                    <div className="text-xl font-bold hover:text-gray-500 pb-4">
                                        Round 3a: Technical Interview
                                    </div>
                                    <p className="pb-4">
                                        This consisted of 2/3 leetcode style questions. With the first one being a warmup question. For this, other than showing technical competency,
                                        I highly recommend brushing up on how to communicate your thought process. <a href="https://www.techinterviewhandbook.org/coding-interview-rubrics">(see communication section here) </a> Here I feel this was valued highly, and even if stuck, if you knew how to ask the right questions to ask for small hints,
                                        as long as you could work easily with the interviewer, I felt it was pretty straightforward. Here, I felt it was my question when wrapping up the interview,
                                        where I asked if there was anything I didn’t demonstrate in the interview that the interviewer wanted to know about, was I feel what secured me the incline.
                                        We talked a lot about my experiences after I asked this question, and even though I didn’t do perfect on the questions (I had to recieve some push and hints) but my interviewer felt I was someone he vibed with and was easy to work with, & had the experiences and communication to back it up, which led him to say at the end 
                                        he'd hope I'd be able to taste the LinkedIn food for myself instead of asking about it. 
                                    </p>
                                    <div className="text-xl font-bold hover:text-gray-500 pb-4">
                                        Round 3b: Behavioural Interview
                                    </div>
                                    <p className="pb-4">
                                        Standard questions on how you drove impact, weaknesses and deep dive on the projects you did. This is the bar. No matter how technically strong you are, the behavioural interview is what makes or breaks you.
                                        My only tips for this is just to be yourself and genuine, and prepare for expected questions. Show passion for the work you do, and most importantly, show you’re a chill,
                                        vibey person they can see themselves working with in the future.
                                    </p>
                                    <div className="text-xl font-bold hover:text-gray-500 pb-4">
                                        Round 4: Host manager call
                                    </div>
                                    <p className="pb-4">
                                        Congrats! You’ve cleared the interview bar which is the hardest part. The next stage is team-matching where you will be matched with a team, and have a chance to talk with your host manager.
                                        This call was a very informal call that aims to get you aligned with what you will be doing throughout the internship. However, its still a step before getting the offer,
                                        so come prepared with some questions to ask about the team.
                                    </p>
                                    <div className="text-xl font-bold hover:text-gray-500 pb-4">
                                        Round 5: Offer Call
                                    </div>
                                    <p className="pb-4">
                                        If all goes well, you'll be called again by your recruiter on whether you're recieving an offer or not (they call for both offer and rejection) as well as the offer letter
                                        on the same day if you do get it. Usually, its fairly immediate (1-2 days) after your host manager call. I haven't heard anyone rejected at this stage by the company,
                                        so if you already passed round 3, its a pretty strong signal you'll be getting an offer barring poor team fit.
                                    </p>
                                </div>
                                <div className="pb-8">
                                    <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                                        The Internship Experience
                                    </div>
                                    <div>
                                        <p className="pb-4">
                                            The internship was 16 weeks, and was in-person at their Sunnyvale HQ.
                                            At the time, LinkedIn covered all my accommodations, immigration (canadian working in the states) and flights.
                                            So all I had to do was pack my bags and make the trek down to the Bay Area.
                                            <Link href="/blog/van-to-bay-intern">
                                                <div className="text-blue-500">
                                                    You can see my post here on what I did to set myself up to live in the States as a Canadian citizen
                                                </div>
                                            </Link>
                                        </p>
                                    </div>
                                    <div>
                                        <Image
                                            src="/blogImages/linkedin/food-bkfast.jpg"
                                            alt="beans"
                                            height={2700}
                                            width={2700}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            Intern buddies mucking bkfast on the last day
                                        </p>
                                    </div>
                                    <div className="text-xl font-bold pt-8 text-md pb-4">
                                        Working at the office
                                    </div>
                                    <p className="pb-4">
                                        I was in the Sunnyvale location, which is their flagship office and it offered an experience that was akin to my college campus; super modern, super techy. Everything was also really accessible via just hopping on one of the campus bikes.
                                    </p>
                                    <p className="pb-8">
                                        I had only previously done remote internships, so it was really cool to be able to do an in-person one. I really valued being able to reach over my desk and talk to my mentor over waiting for a ping on slack like I would in my past internships.
                                        It led to many improptu whiteboarding sessions and we’d be able to pull in team members with ease if we needed their specific expertise on something. The cohort for winter was relatively small, so it was really nice to have proximity to them and get really close with them.
                                        By the end of the internship, I had 3 of my closest intern buddies working all together in the same desk area cause one of them was on a direct adjacent team and the others had no team members in office (sorry my team for the debauchery that would happen ahha)
                                    </p>
                                    <div>
                                        <Image
                                            src="/blogImages/linkedin/menace.jpg"
                                            alt="beans"
                                            height={2500}
                                            width={2900}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            intern buddies being menaces @ HQ (after 5 pm ofc)
                                        </p>
                                    </div>
                                    <p className="pt-4 pb-4">
                                        I also worked out of the SF office multiple times throughout the internship. (so I could do stuff in SF after work) It was nice, but not a lot of people come into the SF office to work, so the office felt really gloomy everytime I went in. But its the office with a lot of younger people,
                                        so the SF office is how I met most of my full-timer friends that branched me into my south bay new grad friends. If there’s ever a need to be in the SF after work, I’d suggest taking the baby bullet caltrain and working out of the office. The commute isn’t too bad from
                                        sunnyvale, about a 45 minute train ride if you time and take the Baby bullet. I definetly don’t recommend working alone in the SF office, it can feel lonely. Bring a few interns w u or meet up w some full-timers.
                                    </p>
                                    <div className="pt-2 pb-8">
                                        <Image
                                            src="/blogImages/linkedin/sf-bkfast.jpg"
                                            alt="beans"
                                            height={1600}
                                            width={1300}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            eating bkfast at the rooftop patio @ the sf office
                                        </p>
                                    </div>
                                    <div>
                                        <Image
                                            src="/blogImages/linkedin/li-sf.jpg"
                                            alt="beans"
                                            height={3000}
                                            width={4000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            posing @ the linkedin sf sign
                                        </p>
                                    </div>
                                    <div className="font-bold text-xl pt-8 pb-4">
                                        LinkedIn Food
                                    </div>
                                    <p className="pb-4">
                                        This literally deserves a separate section. Food is insane!! (consistently delicious @ HQ) Expect a full-blown ramen bar and boba bar with menu changes weekly, and daily changes at the Building 3 cafe.
                                        My favourites included the earl grey milk tea, the tonkotsu ramen, beef brisket, the truffle fries and the congee for breakfast in the morning.
                                    </p>
                                    <div className="pb-8">
                                        <Image
                                            src="/blogImages/linkedin/miso-ramen.png"
                                            alt="beans"
                                            height={1700}
                                            width={1300}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            tonkotsu ramen w/ miso butter & earl grey boba
                                        </p>
                                    </div>
                                    <div className="pb-8">
                                        <Image
                                            src="/blogImages/linkedin/burg-brisket.jpg"
                                            alt="beans"
                                            height={3000}
                                            width={3000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            tonkotsu burger & texas bbq beef brisket
                                        </p>
                                    </div>
                                    <div className="pb-8">
                                        <Image
                                            src="/blogImages/linkedin/3pm-muck.png"
                                            alt="beans"
                                            height={1700}
                                            width={1300}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            intern buddies eating an afternoon snack
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-8">
                                    <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                                        The work
                                    </div>
                                    <p className="pb-4">
                                        I was team-matched to the Deep Learning Training Platform team which is in-charge of serving the platforms on which LinkedIn runs ML jobs. I was assigned to work on a debuggability project.
                                        In summary, I built and implemented software that would allow users to debug machine learning training job failures due to segmentation faults in just minutes. I can’t go into specifics about the project (NDA), but it was really cool to be able to work on such a high impact project (20+ internal customers impacted within 2 weeks of deployment) and recognition from some pretty cool tech companies when my team showcased my project at an AI meetup. (Uber, NVIDIA, Google, Nuro, Airbnb, etc.)
                                    </p>
                                    <div className="pb-8">
                                        <Image
                                            src="/blogImages/linkedin/offsite.jpg"
                                            alt="beans"
                                            height={3000}
                                            width={4000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            my team eating @ an offsite
                                        </p>
                                    </div>
                                    <p className="pb-4">
                                        Prior to the internship starting, I had clearly stated I wanted to hit a far-exceeds performance goal & return offer to my mentor. With that in mind, he focused a lot on helping me acheive it. Here, your mentor is your biggest advocate.
                                        If you perform well, he also performs well as it means he's doing a good job. Your job as an intern is to make your mentor look good by performing well, so that he can advocate for your performance goals. There are 3 main parts of your perfomance package:
                                        Communication. Leadership & Execution. Let's talk about how I acheived them.
                                    </p>
                                    <div className="font-bold text-xl pb-4">
                                        Onboarding
                                    </div>
                                    <p className="pb-4">
                                        The learning curve for this was insane. I never worked with such low-level work (needed extensive knoweldge of the Linux Kernel and it’s interaction with K8s) I was very blessed to have very strong support by my mentor, and he told me to skip the training and to just jump straight into learning about the project itself as it wasn’t relevant to the team.
                                        (team has a very specific domain, and the orientation training is too general to encompass it)
                                    </p>
                                    <p className="pb-4">
                                        Cause of this, in the first week, I was already making PRs to my project. Still though, I found myself struggling a lot to keep up with the pace. There was a lot of extensive knowledge gaps I had, and I found myself consistently asking my mentor about higher-level technical challenges to bridge this gap. Overall, it was a stark constrast to my previous internships, where I wasn’t hand held through small problems.
                                        Instead, I was expected to figure out debugging/small problems individually, and focus on asking/understanding the larger, complex technical challenges to be able to have my project.
                                    </p>
                                    <div className="pt-2 pb-8">
                                        <Image
                                            src="/blogImages/linkedin/gg-bridge.jpg"
                                            alt="beans"
                                            height={2500}
                                            width={2500}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            the interns visit the Golden Gate Bridge
                                        </p>
                                    </div>
                                    <p className="pb-4">
                                        I worked lots of overtime in the first 2 months to be able to deploy my project as an MVP for demo by mid-point evaluation. 2 months for the depth of experience I had to know was not a lot, but the support from my insanely smart mentor was crazy. I put a lot of time in understanding what I was doing more than just simply writing code. Writing code wasn't hard, but it was about understanding the most performant, and optimal way to approach the problem so that
                                        you could write good code to do so. I had to do a lot of terminal based work and picked up Kubernetes extremely fast having no prior experience. At this point, I was pushing my limits on what I could do, as I never learned this in school.
                                    </p>
                                    <div className="font-bold text-xl pb-4">
                                        It's not just technical
                                    </div>
                                    <p className="pb-4">
                                        Communicating your impact I’d say is just as important as being able to deliver technically. Even if you can finish a complex project extremely fast, what good is it if no one knows how complex it was and how you doing it so fast was out of the ordinary? My mentor taught me to do ‘milestone’ announcements in the team slack channel,
                                        where I’d record a demo on Loom to showcase a milestone of my project, what it was, the deep dive, and why it was important I finished it. This tip was one of the strong reasons why I scored a ‘far-exceeds’ on my communication portion of my performance package. It’s not only important that your team knows what you are doing,
                                        but it also helps with garnering feedback from the team. Other team members feedback would further help improve my project so it was impactful.
                                    </p>
                                    <div className="pb-8">
                                        <Image
                                            src="/blogImages/linkedin/company-connect.jpg"
                                            alt="beans"
                                            height={2800}
                                            width={3000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            the interns meet the CEO
                                        </p>
                                    </div>
                                    <div className="font-bold text-xl pb-4">
                                        The 'deep dive' principle. Owning & knowing your work.
                                    </div>
                                    <p className="pb-4">
                                        The team culture really valued knowing and owning your work, being able to what they call ‘deep dive’ anytime into what you were doing. It wasn’t simply enough to just know what you were doing, but to understand exactly why you were doing it; what the possible alternatives could be and why your method is the best and most optimal.
                                        For me, this required extensive knowledge of the team, and why my project was useful. Don’t be afraid to ask questions to bridge this gap. My manager gave me a really strong tip where I should be able to go home after the internship and explain down to every technical detail what my project does, and why I made certain decisions to even someone
                                        not in CS. That's when you knew that you knew and owned your project properly.
                                    </p>
                                    <p className="pb-4">
                                        From the get go, I was lucky that my project was a highly requested feature by the staff members on my team and other AI engineers @ LinkedIn.  However, it might not be the case halfway through as you dive further.
                                        If you want to aim for the highest you can perform, I’d highly recommend pivoting and working with your mentor to see how your project can go from somewhat impactful to highly impactful.
                                    </p>
                                    <div className="pt-2 pb-8">
                                        <Image
                                            src="/blogImages/linkedin/bb-shower.jpg"
                                            alt="beans"
                                            height={3000}
                                            width={4000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            my teammates baby shower
                                        </p>
                                    </div>
                                    <p className="pb-4">
                                        I felt there was a lot of personal pride associated with the intern project being 'my' project. When my project wasn’t going well, I would feel sad/upset. However, because of the ‘deep dive’ principle, I'd work to gain knowledge to understand the challenges I was facing and advocate for potential solutions to the team.
                                        Remember, your team has work to do that they are busy with. So, your job as the intern is to know enough to present solutions, not problems; so that they can help you and enjoy helping you, which ends up being a positive feedback loop. Easy to work with = I don't mind helping you more :D
                                    </p>
                                    <div className="font-bold text-xl pb-4">
                                        Documentation & Justification
                                    </div>
                                    <p className="pb-4">
                                        Building on the ‘deep dive’ principle, I feel working in tech in general is all about being able to justify choices. I believe that the only difference between a junior SWE and staff SWE is the technical expertise in the team’s domain to be able to justify a decision. As an intern, I felt my job was mostly to absorb the knowledge from other more senior team members and my mentor, put it in documentation,
                                        and in that documentation justify my solution to the technical challenge I’d be solving in my project. With my mentors help in pointing out who to contact for their specific domain expertise, I was able to lead & create a secure storage solution for my project.
                                    </p>
                                    <p className="pb-4">
                                        Be mindful because everyone is busy with their own stuff, you should always be prepared with documentation
                                        to help with their understanding. They shouldn't be learning your project alone, but you should be teaching them what they need to know and what domain knowledge they carry that they can provide to help unblock you.  This is why creating documentation is so important. Helping others quickly understand what you need from them will make things mostly frictionless and you'll spend more time working than waiting.
                                        This aspect of taking intitative to make the lives of other engineers easier through documentation was one of the factors that net me a 'far-exceeds' in the leadership category.
                                    </p>
                                    <div className="font-bold text-xl pb-4">
                                        Finishing strong
                                    </div>
                                    <p className="pb-4">
                                        Because of the principles I mentioned, I was in a great spot at the end of the internship. I had my project fully deployed 2 weeks before the internship ended and was seeing great user impact by jumping to help on any engineer that was facing a training job failure issue.  The early delivery of my project was crucial to be able to see it work in the real-world case, and 
                                        taking the personal intitative to help engineers solve their problems through my project, and ask for feedback ended up netting my mentor and I, 2+ internal awards. This impact was what net me a 'far-exceeds' in the execution category, the final pillar in my performance package. 
                                    </p>
                                    <div className="pt-2 pb-8">
                                        <Image
                                            src="/blogImages/linkedin/mentor_me.jpg"
                                            alt="beans"
                                            height={4000}
                                            width={3000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            my mentor & I after my final presentation (messages are our debauchery)
                                        </p>
                                    </div>
                                    <p className="pb-4">
                                        One of the biggest lessons I learned is that you are your biggest advocate. Sure, you can be really amazing technically, but I think that’s one part. If you aren’t able to communicate your impact, its really hard to show that you are a high-performer. Writing your own performance package, I believe was what helped me, on top of my mentors advocacy, able to land the far-exceeds rating overall. Remember,
                                        to show you are a top-performer, your job should be to make everyone's life (especially your manager) as easy as possible so that they can help you; and that they also know you are doing things with intention to help make their lives easier. This is why instead of letting your manager write your performance package for final eval, take the intitative to do so. With all of this together, my manager advocated to leadership and got me the far-exceeds performance rating to best help ensure I recieved a return offer
                                        from leadership. 
                                    </p>
                                </div>
                                <div>
                                    <div className="font-bold text-xl pb-4">
                                        Having Fun
                                    </div>
                                    <p className="pb-4">
                                        I put in a lot of hours for the internship, mostly in fear of the economical conditions, and how that would impact my eligibility for return. My biggest takeway was that as long as I did the best I could and eliminated the all factors that I could control (eg. my performance) that would bar me from a return offer, I’d still have an amazing relationship with the team to return in the future even if I couldn't do to economical decisions.
                                        I don’t have any regrets about the internship experience, and it definitely went better than I could’ve imagined.
                                    </p>
                                    <div className="pt-2 pb-8">
                                        <Image
                                            src="/blogImages/linkedin/malibu.jpg"
                                            alt="beans"
                                            height={3000}
                                            width={3000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            the intern boys take on malibu
                                        </p>
                                    </div>
                                    <p className="pb-4">
                                        This was solely because I would try to enjoy myself as much as possible after work and on the weekends. I'd go out a lot to SF and made hella friends from just going out, experiencing things, hosting and throwing events. Without this, I don't think I would've survived my internship, and probably would've crashed and burned by mid-point. Having a solid group of friends to do absolutely heinous activities with made my internship experience perfect.
                                    </p>
                                    <div className="pt-2 pb-8">
                                        <Image
                                            src="/blogImages/linkedin/bbq.jpg"
                                            alt="beans"
                                            height={2000}
                                            width={3000}
                                            className="rounded-2xl"
                                        />
                                        <p className="text-sm pt-2 text-center">
                                            some fters & interns @ my bbq
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-xl pb-4">
                                        Concluding thoughts
                                    </div>
                                    <p className="pb-4">
                                        Cause of my performance throughout the internship, I was given a verbal return offer from HR a few months after my internship ended. I don't know what my future holds, but I cherish the friends I made through the internship (who I'm still very tight with) and look forward to the oppourtunity to work with everyone again. When I joined, I already knew this would be an amazing experience,
                                        but I never thought it would also change me and my perspectives as a person. My expectations of the team, the work, and the culture at LinkedIn was blown away. Truly, I feel that everyone just wants the best for each other, and that makes it an amazing work environment to learn and grow as an engineer.
                                    </p>
                                    <p className="pb-4">
                                        Overall. it was surreal to see 3 years of hard work pay off to my dreams of working for a big-tech company in the Bay. Never would I have thought I'd be able to accomplish this if you asked me 2 years ago, less even hitting a 'far-exceeds' rating as an intern. I just really count the fact that I really wanted this (LinkedIn was my dream internship choice) and 
                                        I put in the hours to see it become real when the oppourtunity came. 
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

export default LinkedIntern;