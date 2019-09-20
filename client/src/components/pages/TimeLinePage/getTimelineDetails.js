import axios from "axios";

async function getTimelineDetails(setTimelineDetails) {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    setTimelineDetails(() => response.data);
  } catch (error) {
    console.error(error);
  }
}

export default getTimelineDetails;
