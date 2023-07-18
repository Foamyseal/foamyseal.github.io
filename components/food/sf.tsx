const foodList = [
    {
        rating: "galbijim",
        place:
          "Daeho",
      },
      {
        rating: "pork belly rice",
        place:
          "Surisan",
      },
    {
      rating: "regular udon",
      place:
        "Marugame Udon",
    },
    {
        rating: "Sampan Jook",
        place:
          "Ming Kee",
      },
    {
        rating: "cioppino",
        place:
          "Sotto Mare",
      },
      {
        rating: "doppio zero",
        place:
          "Doppio Zero",
      },
      {
        rating: "siu mai",
        place:
          "Good Luck Dim Sum",
      },
      {
        rating: "crab fried rice",
        place:
          "Pineapple Thai",
      },
  ];
  
  export const SanFranFood = () => {
    return (
      <div className="container mx-auto">
        <h1 className="font-poppins text-center font-semibold items-center text-xl">
          sf food orders
        </h1>
        <div className="pb-8 text-center -mt-4 text-5xl animate-bounce" >ˬ</div>
        <div className="font-poppins text-center text-lg items-center">
          {foodList.map((food, key) => {
            return (
              <div className="pb-2"> {food.place + " " + "- " + food.rating} </div>
            );
          })}
        </div>
      </div>
    );
  };
  