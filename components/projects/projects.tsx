import { ProjectCard } from "./projectCard";
import Link from 'next/link'

const projectList = [
  {
    title: "hubble",
    description:
      "Social Connection app with smart-matching NLP compatibility scoring algorithm, messaging and Spotify sharing.  Made for iOS and Android",
    award1: "Top 3 Best in Show Project @ Google Cloud Demo Week",
    award2: "Winner of COVID-19 Hackathon Fund by Google Cloud ($5000 & personalized Google SWE Mentorship)",
    image: '/projectImages/hubble/jquan.png',
    href: "./projects/hubble",
  },
  {
    title: "ML-assisted Predictive Modeling of Vaccination Uptake in US Counties",
    description:
      "Assist ongoing vaccination campaigns by predicting COVID-19 vaccination uptake percentage in US counties. Identify key sociodemographic factors driving decision to get vaccinated for COVID-19.  DOI: 10.2196/preprints.33231",
    award1: "Hoffman La-Roche Infodemic Research Solutions Award - 3rd Prize ($400) & Top 15 Research Paper",
    award2: "Published in JMIR (Impact Factor: 5.43)",
    image: "/projectImages/manuscript.png",
    href: "./projects/ml-paper",
  },
  {
    title: "Statstify",
    description:
      "A Spotify Web app that displays current top 3 most listened to artists, current top 15 songs, audio features of the songs you listen/listened to (current vs all time), throwback suggestions based on what you listened to in the past, share top songs/top artists/throwbacks and generate playlists function",
    award1: "",
    award2: "",
    image: "/projectImages/statstify.png",
    href: "./projects/statstify",
  },
  {
    title: "minecraft-sisters",
    description:
      "A Python Discord bot that starts and stops Google Cloud Compute Engine hosted Minecraft server via chat commands. Used by minecraft sisters, life building and Gaming Week servers",
    award1: "",
    award2: "",
    image: "/projectImages/minecraft.png",
    href: "./projects/minecraft-sisters",
  },
  {
    title: "TripSuite",
    description:
      "MERN stack travel planning web app that allows you to calculate and create a plan for your next trip, built for NWHacks 2021.",
    award1: "",
    award2: "",
    image: "/projectImages/tripsuite.png",
    href: "./projects/tripsuite",
  },
  {
    title: "PaymentPal",
    description:
      "Simple withdrawal and deposit simulator built using Java and Swing, for my Software Construction class (UBC CPSC 210 2020W)",
    award1: "",
    award2: "",
    image: "/projectImages/paymentpal.png",
    href: "./projects/paymentpal",
  },
  {
    title: "WeatherWear",
    description:
      "A JavaScript web application that takes in weather data from OpenWeather and tells user if he/she should wear a jacket based on the weather conditions",
    award1: "",
    award2: "",
    image: "/projectImages/weather.png",
    href: "",
  },
  {
    title: "upass auto-renew",
    description:
      "Chrome extension built on JavaScript that intends to automatically renew a students monthly transit pass. Built for LifeHacks 2020.",
    award1: "",
    award2: "",
    image: "/projectImages/upass.png",
    href: "",
  },
  {
    title: "MFTM",
    description:
      "Python program that takes in spreadsheet data from ICBC that details yearly invovled fatality group and produces a pie chart to calculate the highest average percentage of Motor Vehicle fatality type per year across 7 year time period to determine which method of transporation is the most dangerous. Built for Introduction to Systematic Program Design (CPSC 103 2019W)",
    award1: "",
    award2: "",
    image: "/projectImages/cs103.png",
    href: "",
  },
];

export const Projects = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-poppins text-center font-semibold items-center text-xl">
        my work
      </h1>
      <div className="text-center -mt-4 text-5xl animate-bounce" >ˬ</div>
      <div className="flex-col px-4 sm:px-6">
        {projectList.map((project, key) => {
          return (
            <ProjectCard
              key={key}
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
};
