import logo from "./logo.svg";
import "./App.css";
import Calender from "./components/Calendar";
import Recipe from "./components/Recipe";
import React, { useEffect } from "react";
import { getSearch } from "./components/ApiClient";
const App = () => {
  useEffect(() => {
    const getData = async () => {
      const allData = await getSearch("dinner");
      return allData;
    };
    console.log(getData());
  }, []);

  return <Recipe />;
};

export default App;
