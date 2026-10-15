
import { useLoaderData } from "react-router-dom";
import image from "../assets/image.jpeg";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

function RecipeItems() {
  const allRecipes = useLoaderData();

  console.log(allRecipes);

  return (
    <div className="card-container">
      {allRecipes?.map((item, index) => (
        <div className="card" key={index}>
          <img
            src={image}
            alt={item.title}
            width="120"
            height="100"
          />

          <div className="card-body">
            <div className="title">{item.title}</div>

            <div className="icons">
              <div className="timer">
                <BsStopwatchFill />

              </div>

              <FaHeart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeItems;
