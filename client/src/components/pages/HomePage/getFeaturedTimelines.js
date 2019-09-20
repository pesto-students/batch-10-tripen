import axios from "axios";

async function getFeaturedTimelines(setTimelines) {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    setTimelines(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default getFeaturedTimelines;
