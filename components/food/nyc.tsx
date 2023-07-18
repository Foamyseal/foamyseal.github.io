const foodList = [
    {
        rating: "salmon tataki",
        place: "Nonono",
      },
    {
      rating: "paneer methi",
      place: "Dhamaka",
    },
    {
        rating: "pepperoni",
        place: "Joes Pizza",
      },
    {
        rating: "toasted everything bagel with lox and caviar cream cheese",
        place: "Russ & Daughters",
      },
      {
        rating: "i'm feat. on her IG LOL",
        place: "Mama Joe's Bkfast Cart",
      },
    {
        rating: "niku",
        place: "Raku",
      },
      {
        rating: "soondubu",
        place: "BCD Tofu House",
      },
      {
        rating: "short rib",
        place: "Baekjeong",
      },
      {
        rating: "seulongtang",
        place: "Gammeok",
      },
  ];
  
  export const NYCFood = () => {
    return (
      <div className="container mx-auto">
        <h1 className="font-poppins text-center font-semibold items-center text-xl">
          nyc food orders
        </h1>
        <div className="pb-8 text-center -mt-4 text-5xl animate-bounce" >ˬ</div>
        <div className="font-poppins text-center text-lg items-center pl-8 pr-8">
          {foodList.map((food, key) => {
            return (
              <div className="pb-2"> {food.place + " " + "- " + food.rating} </div>
            );
          })}
        </div>
      </div>
    );
  };