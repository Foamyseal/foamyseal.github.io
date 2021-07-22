import { Header } from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const MlPaper = () => {
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
        <title>Statstify - Martin Au-yeung</title>
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
               Statstify
               <div className="space-x-4 items-center justify-center">
              <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                React
              </span>
              <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                Node.js
              </span>
              <span className="transform transition-all duration-150 inline-block bg-green-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-green-900   hover:shadow-sm  hover:scale-105">
                Spotify API
              </span>
              </div>
            </div>
            <p className="pb-4">
              I wanted to make a spotify app that showed my throwback songs and tell me a lot more about how I listen, so I did just that.
            </p>
            <b className="pb-1">Timeline:</b>
            <p className="pb-1">August 2020</p>
          </div>
          <div className="position-relative col-span-4">
          
          </div>
          <div className="md:pl-8 col-span-4 pt-12">
            <div className="pb-4">
              <b>Abstract</b>
            </div>
            <p className="pb-2">
              While the COVID-19 pandemic has left an unprecedented impact
              globally, countries such as the United States of America have
              reported the most significant incidence of COVID-19 cases
              worldwide. Within the United States of America, various
              sociodemographic factors have played a vital role in developing
              regional disparities. The presence of regional disparities has
              resulted in the unequal spread of disease between U.S. counties,
              underscoring the need for efficient and accurate predictive
              modelling strategies to inform public health officials and reduce
              the burden on healthcare systems. Furthermore, despite the
              widespread accessibility of COVID-19 vaccines across the United
              States of America, vaccination rates have become stagnant,
              necessitating predictive modelling to identify factors impacting
              vaccination uptake. This study utilizes sociodemographic data and
              machine learning to develop a predictive model for COVID-19
              vaccination uptake on a county level. Sociodemographic data on
              fully vaccinated and unvaccinated individuals were sourced from
              several online databases, such as the United States Centre for
              Disease Control and United States Census Bureau COVID-19 Site.
              Machine learning analysis was performed using XGBoost and
              sociodemographic data. Our model predicted COVID-19 vaccination
              uptake across US countries with 59% accuracy. The model also
              identified important sociodemographic features used to predict
              vaccination uptake; location, education, ethnicity, and income.
              Lastly, the model produced a visually accurate choropleth- which
              can be used by authorities in future pandemics to visualize and
              prioritize areas of low vaccination and design targeted
              vaccination campaigns.
            </p>
            <p className="pb-2"></p>
            <p className="pb-2"></p>
            <p className="pb-2"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MlPaper;
