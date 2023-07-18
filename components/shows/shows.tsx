const experienceList = [
  {
    venue: "San Jose Civic",
    artist:
      "Subtronics",
  },
  {
    venue: "Midway SF",
    artist:
      "Wooli",
  },
  {
    venue: "Midway SF",
    artist:
      "William Black",
  },
  {
    venue: "SoCal",
    artist:
      "Beyond Wonderland",
  },
  {
    venue: "Bill Graham Civic Auditorium",
    artist:
      "Dabin",
  },
  {
    venue: "LA",
    artist:
      "Coachella 2023",
  },
  {
    venue: "The Gorge",
    artist:
      "ILLENIUM LIVE",
  },
  {
    venue: "Brooklyn Mirage",
    artist:
      "BTSM",
  },
  {
    venue: "Webster Hall",
    artist:
      "Nurko",
  },
  {
    venue: "Barclays Center",
    artist:
      "ILLENIUM LIVE",
  },
  {
    venue: "Brooklyn Mirage",
    artist:
      "Subtronics",
  },
  {
    venue: "Toronto",
    artist:
      "VELD 2023",
  },
  {
    venue: "Pacific Coliseum",
    artist:
      "Ophelia Takeover",
  },
  {
    venue: "Las Vegas",
    artist:
      "EDC 2024",
  },
];

export const Shows = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-poppins text-center font-semibold items-center text-xl">
        2023 shows 
      </h1>
      <div className="pb-8 text-center -mt-4 text-5xl animate-bounce" >ˬ</div>
      <div className="font-poppins text-center text-lg items-center">
        {experienceList.map((experience, key) => {
          return (
            <div className="pb-2"> {experience.artist + " " + "- " + experience.venue} </div>
          );
        })}
      </div>
    </div>
  );
};
