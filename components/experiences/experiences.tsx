const experienceList = [
  {
    title: "linkedin",
    position:
      "deep learning",
  },
  {
    title: "blackberry",
    position:
      "cloud infrastructure",
  },
  {
    title: "holmetrics",
    position:
      "full-stack",
    image: "/experienceImages/holmetrics-logo.jpeg",

  },
  {
    title: "ubc sus",
    position:
      "web-dev"
  },
];

const projectList = [
  {
    name: "first co-author @ ",
    link: " doi: 10.2196/33231.",
  },
  {
    name: "google cloud covid-19 winner",
    link: "/w hubble",
  },
];

export const Experiences = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-poppins text-center font-semibold items-center text-xl">
        swe highlights
      </h1>
      <div className="pb-8 text-center -mt-4 text-5xl animate-bounce" >ˬ</div>
      <div className="font-poppins text-center text-lg items-center">
        {experienceList.map((experience, key) => {
          return (
            <div className="pb-2"> {experience.position + " " + "@ " + experience.title} </div>
          );
        })}
      </div>
      <div className="font-poppins text-center text-lg items-center">
        {projectList.map((project, key) => {
          return (
            <div className="pb-2"> {project.name + project.link} </div>
          );
        })}
      </div>
    </div>
  );
};
