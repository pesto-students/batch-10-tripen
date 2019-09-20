import axios from "axios";

async function getFeaturedTimelines(setTimelines) {
  try {
    const response = await axios.get("http://localhost:3030/api/timeline");
    setTimelines(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default getFeaturedTimelines;
