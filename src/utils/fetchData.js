export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f06975745amshe3c4eb972d0d0a9p17a58cjsnf2dcf2dd6033',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};
  
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}