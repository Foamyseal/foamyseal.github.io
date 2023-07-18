const foodList = [
    {
        rating: "bottarga",
        place: "Pasta Sisters",
      },
      {
        rating: "P2 + beef tartare",
        place: "Parks BBQ",
      },
  ];

  
  export const LAFood = () => {
    return (
      <div className="container mx-auto">
        <h1 className="font-poppins text-center font-semibold items-center text-xl">
          la food orders
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