import "./App.css";
import Recipe from "./components/Recipe";
import React, { useEffect, useState } from "react";
import { getSearch } from "./components/ApiClient";
const App = () => {
  const [recipeData, setRecipeData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const allData = await getSearch("dinner");
      setRecipeData(allData);
    };
    getData();
  }, []);
  console.log(recipeData, "App, recipe Data");
  return <Recipe recipeData={recipeData} />;
};

export default App;
