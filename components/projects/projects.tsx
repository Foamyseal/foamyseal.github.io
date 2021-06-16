import { ProjectCard } from "./projectCard";
import Link from 'next/link'

const projectList = [
  {
    title: "hubble",
    description:
      "Social Connection app with smart-matching NLP compatibility scoring algorithm, messaging and Spotify sharing.  Made for iOS and Android",
    award1: "Top 3 Best in Show Project @ Google Cloud Demo Week",
    award2: "Winner of COVID-19 Hackathon Fund by Google Cloud ($5000 & personalized Google SWE Mentorship)",
    buttonText1: "Live Demo to Google",
    buttonLink1: "https://events.withgoogle.com/demo-week-hackathon-fund",
    buttonText2: "Google Event",
    buttonLink2: "Live Demo to Google",
    button1Enable: true,
    button2Enable: true,
    image: '/projectImages/hubble/jquan.png',
    href: "./projects/hubble",
  },
  {
    title: "ML-assisted Predictive Modeling of Vaccination Uptake in US Counties",
    description:
      "Assist ongoing vaccination campaigns by predicting COVID-19 vaccination uptake percentage in US counties. Identify key sociodemographic factors driving decision to get vaccinated for COVID-19. Pending publication",
    award1: "Current Top 15 Finalist of the 2021 Big Data Undergraduate Challenge by STEM Fellowship",
    award2: "",
    buttonText1: "",
    buttonText2: "",
    buttonLink1: "Live Demo to Google",
    buttonLink2: "Live Demo to Google",
    button1Enable: false,
    button2Enable: false,
    image: "/projectImages/manuscript.png",
    href: "./projects/ml-paper",
  },
  {
    title: "Statstify",
    description:
      "A Spotify Web app that displays current top 3 most listened to artists, current top 15 songs, audio features of the songs you listen/listened to (current vs all time), throwback suggestions based on what you listened to in the past, share top songs/top artists/throwbacks and generate playlists function",
    award1: "",
    award2: "",
    buttonText1: "App Link",
    buttonText2: "GitHub",    
    buttonLink1: "Live Demo to Google",
    buttonLink2: "Live Demo to Google",
    button1Enable: true,
    button2Enable: true,
    image: "/projectImages/statstify.png",
    href: "./projects/hubble",
  },
  {
    title: "minecraft-sisters",
    description:
      "A Python Discord bot that starts and stops Google Cloud Compute Engine hosted Minecraft server via chat commands. Used by minecraft sisters, life building and Gaming Week servers",
    award1: "",
    award2: "",
    image: "/projectImages/minecraft.png",
    href: "./projects/hubble",
  },
  {
    title: "TripSuite",
    description:
      "MERN stack travel planning web app that allows you to calculate and create a plan for your next trip, built for NWHacks 2021.",
    award1: "",
    award2: "",
    image: "/projectImages/tripsuite.png",
    href: "./projects/hubble",
  },
  {
    title: "PaymentPal",
    description:
      "Social Connection app with smart-matching NLP compatibility scoring algorithm, messaging and Spotify sharing. Made for iOS and Android",
    award1: "",
    award2: "",
    image: "/projectImages/paymentpal.png",
    href: "./projects/hubble",
  },
  {
    title: "WeatherWear",
    description:
      "A JavaScript web application that takes in weather data from OpenWeather and tells user if he/she should wear a jacket based on the weather conditions",
    award1: "",
    award2: "",
    image: "/projectImages/weather.png",
    href: "./projects/hubble",
  },
  {
    title: "upass auto-renew",
    description:
      "Chrome extension built on JavaScript that intends to automatically renew a students monthly transit pass. Built for LifeHacks 2020.",
    award1: "",
    award2: "",
    image: "/projectImages/upass.png",
    href: "./projects/hubble",
  },
  {
    title: "MFTM",
    description:
       "Python program that takes in spreadsheet data from ICBC that details yearly invovled fatality group and produces a pie chart to calculate the highest average percentage of Motor Vehicle fatality type per year across 7 year time period to determine which method of transporation is the most dangerous.",
    award1: "",
    award2: "",
    image: "/projectImages/cs103.png",
    href: "./projects/hubble",
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
