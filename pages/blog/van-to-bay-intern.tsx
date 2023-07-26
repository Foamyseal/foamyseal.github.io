import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { Footer } from "../../components/footer";

const VanToBayIntern = () => {
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
        <title>Van to Bay Intern Guide - Martin Au-yeung</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="How Martin setup himself up for success to work in the Bay Area as a Canadian"></meta>
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
                    Vancouver to Bay Area Intern Guide 🌉
                  </div>
                </a>
                <div className="font-bold text-slate-400 pb-2">
                  An Unofficial Guide of how I as a UBC Student supported myself to the Bay Area without help from co-op
                </div>
                <div className="font-bold text-indigo-400 pb-8">
                  Last Updated: July 18th 2023
                </div>
                <div className="">
                  <div className="font-bold text-3xl pb-4">
                    Introduction
                  </div>
                  <p className="pb-4">
                    This post is meant to serve as a description of my personal experience and what I did to prepare as a Canadian Citizen
                    attending the University of British Columbia moving to the Bay Area to intern at LinkedIn.
                  </p>
                  <p className="pb-4">
                    As such, this post is not endorsed by UBC or LinkedIn and I am not a lawyer or finance expert. Everything here is knowledge I gained through
                    my experiences, and I wish to share it here. This post takes knowledge from Stephen Holiday's Waterloo Intern Guide and as well Stanford Lin & William Qi,
                    who graciously taught me what they've done when moving to the US to work as SWE's full time.
                  </p>
                  <p className="pb-4">
                    My housing and food was covered as part of terms highlighted with LinkedIn. Hence why they are missing from this post.
                  </p>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  Pre-USA
                </div>
                <div className="font-bold pt-2 text-xl pb-4">
                  J-1 Visa
                </div>
                <p className="pb-4">
                  When working for big tech, it's expected that they will have a visa sponsor to help you secure a J-1 visa to work in the states.
                  My experience highlights Intrax as my visa sponsor and representitives Berry Appleman & Leiden serving as my immigration lawyers.
                </p>
                <p className="pb-4">
                  It's very important that you are enrolled at UBC as a full-time student, especially in the prior term. For me, since I took off a year for academic leave
                  to pursue my previous internship at BlackBerry, and I just missed the credit threshold in the summer to be deemed full-time due to some careless calculations; my J-1
                  application was rejected by Intrax. It doesn't matter if you were a full-time student before taking academic leave. You must be a full-time student in the preceding term of the internship start date.
                  This means, if you were enrolled full-time in the Winter session from Jan - Apr, or if taking a break during that time, or enrolled in 9 credits in the Summer from May - Aug, you will be fine for a Fall internship.
                  For summer, this means you would need to be enrolled in the Winter session from Jan - Apr. If you are on co-op and recieving credits that qualify you as full-time, this doesn't apply.
                </p>
                <div className="pt-2 pb-4">
                  <Image
                    src="/blogImages/van-to-bay/j-1 credit.png"
                    alt="beans"
                    height={1000}
                    width={3500}
                    className="rounded-xl pt-2 pb-2"
                  />
                </div>
                <div className="font-bold text-xl pb-4">
                  Finances
                </div>
                <p className="pb-4">
                  I didn't have a US bank account, and didn't have cash in USD to start. Because of my experience travelling in the South Bay and needing a car, I had to find a credit card with rental-car insurance so I was covered.
                </p>
                <p className="pb-4">
                  After thinking through what was best for my personal use, I applied for the Scotiabank Passport Visa Infinite Card. (This card has an annual fee.) At the time of writing, there was a special offer where
                  I could "earn up to $1,300* in value in the first 12 months, including up to 40,000 bonus Scene+ points and first year annual fee waived." This card was most useful for me due to no foreign transcation fees, which is huge
                  when I didn't have any USD to spend. As well, it gave me car-rental insurance and travel insurance. I also got more points compared to other similar cards. (TD Aeroplan Visa Infinite) Since I expect to travel more anyways,
                  the airport lounge acesss and 2x points on rideshare was very useful to me over the current cards I was using.
                </p>
                <p className="pb-4">
                  William also suggested I open a US cross-border TD account since I was already with them. This set me up where I could hold USD in Canada if I wanted to transfer money to family, or over 100K in monetary value. I ended up not doing this as
                  I had a lot of friends in Canada that needed to buy things in the states, so I'd act as a no-forex broker to send people USD and get back CAD.
                </p>
                <p className="pb-4">
                  Having a Canadian AMEX Card is very useful, as we can use AMEX Global to transfer our Canadian Credit score to be able to apply for US credit cards. I have the SimplyCash AMEX, which has no annual fees but lacks travel insurance and other perks.
                  But it is probably one that is feasible to get in a short time frame.
                </p>
              </div>
              <div className="text-3xl pt-2 font-bold hover:text-gray-500 pb-4">
                Crossing the Border
              </div>
              <p className="pb-4"> This was pretty straight forward for me since I was a NEXUS holder. I only had to really care bout bringing my DS-2019, Passport, Training Plan & SEVIS fee receipt and showing only my DS-2019 & Passport.  DO NOT USE THE NEXUS AUTOMATED KIOSKS, as they automatically assign you
                a visitors visa, and require a bit of a delay to sort it out at the airport. (I made this mistake after I returned the states from going back to Canada quickly) If you are using NEXUS, just go directly to the agent and they'll sort it out. On my first trip crossing the border, I explained
                explicity that I was going to the states on a J-1 visa for "training". In legalese, the J-1 visa status is not meant for “working”, but rather for “training” in the United States, so make sure you don't say explicity you're working and focus either on saying it's for an internship/training!
              </p>
              <p className="pb-4">I left the internship for a few days to return to Vancouver to write a final. I notified Intrax I was doing so ahead of time, but they said there was no need. MAKE SURE TO BRING YOUR DS-2019. If you don't, you won't be allowed back to enter the USA to intern. The process to return was smooth except for the fact I used the automated kiosk. If I didn't
                it probably be a lot easier.</p>
              <div className="pt-8 pb-8">
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  First Week in the Bay
                </div>
                <div className="font-bold pt-2 text-xl pb-4">
                  Car Rental
                </div>
                <p className="pb-4">
                  When I traveled to the Bay Area for Second Sky Festival, Stanford clearly told me I needed a car. This process describes how I rented a car for that trip.
                </p>
                <p className="pb-4">
                  I chose to use Enterprise for my car rental in the first week as UBC provides codes that waive the young driver fee. Do bring your UBC ID with you to prove you are a student.
                </p>
                <p className="pb-4">
                  If you've followed my thought processes in recieving a credit card that covers car rental insurance. We don't have to worry much then.
                </p>
                <p className="pb-4">
                  I stress heavily on having a car. It saved me on a lot of intitial setup I needed (eg. housekeeping items) to make my home have all the toiletries and items I needed to maintain it.
                </p>
                <div className="font-bold text-xl pb-4">
                  Cellular
                </div>
                <p className="pb-4">
                  Previously, I've used T-mobile Test drive for Las Vegas to get a free month of 30 GB of 5G data. However, after using this a few times. I didn't like the 5G experience with T-mobile, where I was constantly
                  running out of service in NYC, SF, Seattle and Las Vegas. I'll be looking to switch to verizon. Airalo is a great option to start of with a few GB of data while you get your cellular plan setup.
                  I use a iPhone 13 Pro max, so I have an esim with my phone. Both Test Drive and Airalo require a unused esim slot. So if you are using a non-physical sim for your phone, maybe switch to one to free up a esim slot.
                </p>
                <p className="pb-4">
                  So, verizon ended up being a better option for me in the Bay for service coverage, so I opted for their low-cost service called Visible. Setting up visible was kind of a pain since they didn't support esim on my iPhone 13 Pro Max (???)
                  but I ended up getting a physical sim shipped in 2 buisness days so it wasn't too terrible. Ended up having basically unlimited data for only $30 usd a month.
                </p>
                <div className="font-bold pt-2 text-xl pb-4">
                  SSN
                </div>
                <p className="pb-4">
                  This part of the post takes information from Steph Holiday's Guide. I followed this pretty much, so I will post it here again.
                </p>
                <p className="pb-4">
                  Apply for your SSN as soon as possible given you meet the requirements of your J-1 sponsor (2 business days after checking in for intrax). I-94 is now digital so there is no 10 day wait.
                  Note that some companies may not pay you until you get your SSN. It takes around 2 weeks for SSN to get mailed to you after you apply, so you may not get paid until one month into your term.
                  Bring enough money to last for a month!
                </p>
                <p className="pb-4">
                  SSN Application   </p>
                <li className="pl-8"> Fill in form SS-5 available at the Social Security Administration’s website.</li>
                <li className="pl-8">                   Bring forms and documentation to your local SSA office. </li>
              </div>
              <p className="pb-4">I ended up just goint to the local SSA office in Mountain View and recieved my SSN card in around 10 buiness days. This I could then use to apply for credit cards. </p>
              <div className="font-bold pt-2 text-xl pt-8 pb-4">
                Banking
              </div>
              <p className="pb-4">
                To get paid, you need a US banking account. I immediately (before recieiving my SSN, but after getting a US number) went to Chase to open a chequing account since I had a referral of $500 to do so. (If you need one, contact me) The process was fairly straightforward and I just had to bring my J-1 visa documents,  proof of address and passport.
                Once I recieved my SSN, I went back to Chase or I called in to update it (forgot which one) so I could start building credit (extremely important)
              </p>
              <p className="pb-4"> The account I opened was a chequing account that had no monthly fees if I had a minimum amount of money in it. This was a great option as there was a referral bonus to open it, and beause I would be saving my USD in cash until I moved, I didn't have to worry about not hitting the minimum amount. </p>
              <div className="font-bold pt-2 text-xl pt-8 pb-4">
                Building Credit
              </div>
              <p className="pb-4">
                This part is extremely important, and I can't believe how many interns neglect this. If you want to move to the states and be able to take out a loan for a car when you're a new grad, (esp in the bay)
                you need good credit. By building this in the start of your internship, you set yourself up for the future and makes finances a lot easier when you move as a new grad. As well, credit card rewards in the US are
                really good in the states, and because of the referral bonuses I recieved + the way you earn points, it basically fully paid my travel expenses for the 3 weeks I spent in NYC this summer. Getting a credit card is a no-brainer here, and one of the things you should prioritize.
              </p>
              <p className="pb-4">
                Since I was 21+ and I had credit history in Canada, what I did first was go to back to Chase bank and see an agent to open a Chase bank credit card after I had opened an account with them. There I applied for the Freedom Unlimited credit card, and because I stressed I had
                a canadian credit history, my agent did me a favour by directly calling an internal number to make sure I got approved for it. Ask your agent if this is possible. I didn't have to show any further documents other than my J-1 and passport again.
              </p>
              <p className="pb-4">
                William suggested I use Amex Global transfer, once I got my SSN. Then to apply for the AMEX Gold Card. This is the route I did on top of asking Stanford for a AMEX referral bonus after opening my Chase card.
                If you need a referral, again contact me. This global transfer allowed me to have an unlimited spend USD credit card over the very heavily limited Chase Freedom Unlimited Card I got. This + the referral bonus basically paid for my subsequent vacations after the internship ended.
              </p>
              <div className="font-bold pt-2 text-xl pt-8 pb-4">
                Random
              </div>
              <p className="pb-4">
                Getting a US bank account is also important so you can use Venmo/Zelle. Chase is a solid bank that supports both options. (natively supports Zelle) Having Venmo was extremely important as its likely as interns, you'll hang out in big groups that only allow one bill. Get Venmo so you can
                spend on your credit card (for those sweet points) and get paid back!!
              </p>
              <p className="pb-4">
                Amazon Prime doesn't carry over from Canada. Ask the other interns to split an account so you can save on getting a car to buy things. In general, if you don't have a car, its cheaper to do Instacart to get groceries.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default VanToBayIntern;