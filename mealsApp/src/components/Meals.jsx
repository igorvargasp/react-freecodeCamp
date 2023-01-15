import React from "react";
import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return <h2 className="section">Loading...</h2>;
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h2 className="section-title">No meals matched your search criteria</h2>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              className="img"
              onClick={() => selectMeal(idMeal)}
            />
            <footer>
              <h5>{title}</h5>

              <BsHandThumbsUp
                className="like-bnt"
                style={{ cursor: "pointer" }}
                onClick={() => addToFavorites(idMeal)}
              />
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
