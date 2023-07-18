const foodList = [
    {
      rating: "toro sashimi",
      place:
        "Hitoe Sushi",
    },
    {
        rating: "alaska roll",
        place:
          "Sushi Garden",
      },
      {
        rating: "roast pork",
        place:
          "HK BBQ Master",
      },
      {
        rating: "spicy salmon sashimi",
        place:
          "Sushimura",
      },
      {
        rating: "shio chashu ramen",
        place:
          "Santouka",
      },
      {
        rating: "mentaiko carbonara & crab croquette",
        place:
          "Wasuta",
      },
      {
        rating: "cross bridge noodle place #8",
        place:
          "Crystal Mall",
      },
      {
        rating: "XLB",
        place:
          "Wang's Shanghai Cuisine",
      },
      {
        rating: "E11 & HK milk tea",
        place:
          "Silver Tower",
      },
  ];
  
  export const VancouverFood = () => {
    return (
      <div className="container mx-auto">
        <h1 className="font-poppins text-center font-semibold items-center text-xl">
          vancouver food orders
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