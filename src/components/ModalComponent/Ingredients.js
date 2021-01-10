import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      <h5>Ingredients</h5>
      <ul>
        {ingredients.map((el) => (
          <li>{el.original}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
