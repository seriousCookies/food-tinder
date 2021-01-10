import axios from "axios";

export async function getSearch(query = "dinner") {
  try {
    const urlBase = "http://localhost:8080/api/search";
    const url = `${urlBase}/${query}`;
    const res = await axios.get(url);
    const result = {
      title: res.data.recipes[0].title,
      readyInMinutes: res.data.recipes[0].readyInMinutes,
      servings: res.data.recipes[0].servings,
      image: res.data.recipes[0].image,
      summary: res.data.recipes[0].summary,
      instructions: res.data.recipes[0].instructions,
      ingredients: res.data.recipes[0].extendedIngredients,
    };
    console.log(res.data.recipes[0].readyInMinutes, "instructions");
    return {
      result,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getRecipe(id) {
  try {
    const urlBase = "api/recipe";
    const url = `${urlBase}/${id}`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return err;
  }
}
