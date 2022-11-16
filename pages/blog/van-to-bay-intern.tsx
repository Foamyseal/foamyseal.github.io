import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

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
                  Last Updated: November 16th, 2022, will be continously updated
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
                <img
                  src="/blogImages/van-to-bay/j-1 credit.png"
                  alt="beans"
                  height={850}
                  width={850}
                  className="rounded-xl pt-2 pb-2"
                />
                <p className="pb-4">
                  filler text
                </p>
                <div className="font-bold text-xl pb-4">
                  Finances
                </div>
                <p className="pb-4">
                  I didn't have a US bank account, and didn't have cash in USD to start. Because of my experience travelling in the South Bay and needing a car, I had to find a credit card with rental-car insurance so I was covered.
                </p>
                <p className="pb-4">
                  After thinking through what was best for my personal use, I went with the Scotiabank Passport Visa Infinite Card. (This card has an annual fee.) At the time of writing, there was a special offer where
                  I could "earn up to $1,300* in value in the first 12 months, including up to 40,000 bonus Scene+ points and first year annual fee waived." This card was most useful for me due to no foreign transcation fees, which is huge
                  when I didn't have any USD to spend. As well, it gave me car-rental insurance and travel insurance. I also got more points compared to other similar cards. (TD Aeroplan Visa Infinite) Since I expect to travel more anyways,
                  the airport lounge acesss and 2x points on rideshare was very useful to me over the current cards I was using.
                </p>
                <p className="pb-4">
                  William also suggested I open a US cross-border TD account since I was already with them. This set me up where I could hold USD in Canada if I wanted to transfer money to family, or over 100K in monetary value.
                </p>
                <p className="pb-4">
                  Having a Canadian AMEX Card is very useful, as we can use AMEX Global to transfer our Canadian Credit score to be able to apply for US credit cards. I have the SimplyCash AMEX, which has no annual fees but lacks travel insurance and other perks.
                  But it is probably one that is feasible to get in a short time frame.
                </p>
                <p className="pb-4">
                  When entering the US with the J-1, it could be asked to have proof of cash-on-hand. Make sure you have at least $2000+
                </p>
              </div>
              <div className="pt-8 pb-8">
                <div className="text-3xl font-bold hover:text-gray-500 pb-4">
                  First Week in the Bay
                </div>
                <div className="font-bold pt-2 text-xl pb-4">
                  Car Rental
                </div>
                <p className="pb-4">
                  When I traveled to the Bay Area for Second Sky Festival, it was Stanford clearly to me I needed a car. This process describes how I rented a car for that trip.
                </p>
                <p className="pb-4">
                  I chose to use Enterprise for my car rental in the first week as UBC provides codes that waive the young driver fee. Do bring your UBC ID with you to prove you are a student.
                </p>
                <p className="pb-4">
                  If you've followed my thought processes in recieving a credit card that covers car rental insurance. We don't have to worry much then.
                </p>
                <div className="font-bold text-xl pb-4">
                  Cellular
                </div>
                <p className="pb-4">
                  Previously, I've used T-mobile Test drive for Las Vegas to get a free month of 30 GB of 5G data. However, after using this a few times. I didn't like the 5G experience with T-mobile, where I was constantly
                  running out of service in NYC, SF, Seattle and Las Vegas. I'll be looking to switch to verizon. Airalo is a great option to start of with a few GB of data while you get your cellular plan setup.
                  I use a iPhone 13 Pro max, so I have an esim with my phone. Both Test Drive and Airalo require a unused esim slot. So if you are using a non-physical sim for your phone, maybe switch to one to free up a esim slot.
                </p>
                <div className="font-bold pt-2 text-xl pb-4">
                  SSN
                </div>
                <p className="pb-4">
                  This part of the post takes information from Steph Holiday's Guide. I will update this part when I am in the states.
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
              <div className="font-bold pt-2 text-xl pt-8 pb-4">
                Building Credit
              </div>
              <p className="pb-4">
                This part of the post takes information from Steph Holiday's Guide. I will update this part when I am in the states.
              </p>
              <p className="pb-4">
                Getting credit in the US can be tricky. Especially if you are under 21. Unless you’re a Canadian citizen, and have already built a credit history in Canada.
                Keep in mind that instead of Interac for debit cards, all American debit cards (also known as “check cards”) are actually VISA/MasterCard cards.
                You can use them anywhere you would use a credit card except the money comes out of your account immediately.
                You can get a Secured Credit card where you put a deposit ($300 - $500) into a special account and that amount becomes your credit limit.
                Something to look into. You don’t get this deposit back until ~2 years later, so keep that in mind. The bank reps say that it is a good way to get a good credit rating though,
                if you need that in the near future.
                Sometimes you can get BoA or TD America to look up your Canadian credit history. TD Ameritrade and BoA has a Canadian credit check form. Really tough if you are under 21.
                If you want a US-bank-based credit card to help build your US Credit History (if the USA is your desired full-time work location),
                RBC Bank (USA) has a policy of allowing people to sign up for a credit card with your Canadian SIN, then attaching it to your American SSN.
                The only “gotcha” is that you have to open an RBC account within 6 months of opening this card (you get it in about a week or two), or the credit account will be closed.
                The best part about this is that if you already have a Canadian credit card of any kind, and you keep a solid rating, you are most likely eligible for this one.
                Look up RBC Bank Credit Cards!
              </p>
              <p className="pb-4">
                William suggested I use Amex Global transfer, once I got my proof-of-living from LinkedIn with my full address for the corperate housing. Then to apply for the AMEX Gold Card.
              </p>
              <p className="font-bold pb-4">
                This post will be updated
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanToBayIntern;