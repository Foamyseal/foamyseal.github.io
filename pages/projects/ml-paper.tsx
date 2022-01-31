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
        <title>ML analysis of COVID-19 Vaccine Uptake - Martin Au-yeung</title>
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
        className="md:grid md:grid-cols-9 font-poppins pl-4 duration-1000 relative transform transition-all translate-y-96 ease-out"
        data-replace='{"translate-y-96": "translate-y-0" }'
      >
        <div className="md:flex md:flex-col md:pl-12 md:col-span-4 pb-8">
          <div>
            <div className="pb-4">
              <Link href="/">
                <div className="text-lg lg:text-lg font-bold hover:text-gray-500 lg:pb-4 pb-2">
                  <p> ↵ back to home</p>{" "}
                </div>
              </Link>
              <div className="text-3xl lg:text-3xl w-lg font-bold pb-4 items-center">
                ML-assisted Predictive Modeling of Vaccination Uptake in US
                Counties
                <div className="space-x-4 items-center justify-center">
                  <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                    Python
                  </span>
                  <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                    XGBoost
                  </span>
                  <span className="transform transition-all duration-150 inline-block bg-teal-500 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-black-900  hover:shadow-sm  hover:scale-105">
                    Machine Learning
                  </span>
                </div>
              </div>
              <p className="pb-4">
                Queena called me and asked if I wanted to do this with her one summer day
              </p>
              <b className="pb-1">Role:</b>
              <p className="pb-1">Machine Learning Coding and Analysis Guy</p>
              <b className="pb-1">Timeline:</b>
              <p className="pb-1">June 2021 - November 2021</p>
              <b className="pb-1">Team:</b>
              <p className="pb-1">
                Me, Queena Cheong, Stephanie Quon, Katsy Concepcion
              </p>
            </div>
            <div className="md:pb-2">
              <b>Abstract</b>
            </div>
            <p className="pb-2">
              While the COVID-19 pandemic has left an unprecedented impact globally, countries similar to the United States of America (US) 
              have reported the most significant incidence of COVID-19 cases worldwide. Within the US, various sociodemographic factors have played an essential role in the creation of regional disparities. Regional disparities have resulted in the unequal spread of disease between US counties, underscoring the need for efficient and accurate predictive modelling strategies to inform public health officials and reduce the burden on healthcare systems. 
              Furthermore, despite the widespread accessibility of COVID-19 vaccines across the US, vaccination rates have become stagnant, necessitating predictive modelling to identify essential factors impacting vaccination uptake. We sourced sociodemographic data on fully vaccinated and unvaccinated individuals from several online databases, such as the US Centre for Disease Control and US Census Bureau COVID-19 Site. 
              We performed machine learning analysis using XGBoost and 83 sociodemographic factors. From this, our model predicted COVID-19 vaccination uptake across US countries with 62% accuracy. In addition, it identified location, education, ethnicity, income and household access to the internet as the most critical sociodemographic features in predicting vaccination uptake in US counties. 
              Lastly, the model produced a choropleth demonstrating areas of low and high vaccination rates, which healthcare authorities can use in future pandemics to visualize and prioritize areas of low vaccination and design targeted vaccination campaigns.
            </p>
            <p className="pb-2"></p>
            <p className="pb-2"></p>
          </div>
        </div>
        <div className="md:col-span-5 md:pl-8 pb-8 pr-4">
          <iframe
            className="w-full aspect-video md:aspect-video"
            src="https://www.youtube.com/embed/HFfNOsBgR3k"
            title="Machine learning-based predictive modelling of COVID-19 vaccination uptake within U.S. Counties."
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
          <div className="pt-8 md:pb-2">
              <b>Challenges Faced:</b>
            </div>
            <p className="pb-2">
              One of the biggest challenges I faced was putting my thoughts into good quality writing (I really have to thank Katsy and Queena for this.) However, I think overall the biggest challenge was time. 
              During the phase when we created this paper, I had a lot of outside commitments that prevented me spending the same amount of time I had on hubble. I also had not that much experience with Machine Learning. 
              To combat this, I was efficient in the way I spent my time, and sought help whenever possible to make sure I was never blocked for more than a few hours at a time. I am very grateful to have the support of my 
              former coworkers at Holmetrics, who's data engineering team supported me in my curiosity of the direction I wanted to acheive with the paper, and our professor mentor, who gave valuable advice on what analyses
              were neccesary to formulate a proper argument in our paper. Not only did I learn how to use a machine learning algorithm and create models out of it, but I learned how to present in such a way which coulds
              state my scientific argument in a way thats publically appealling. What an amazing learning journey.
            </p>
        </div>
      </div>
    </>
  );
};

export default MlPaper;
