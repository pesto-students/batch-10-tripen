import axios from "axios";

async function getTimelineDetails(setTimelineDetails, _id) {
  try {
    const response = await axios.get(`http://localhost:3030/api/timeline/${_id}`);
    setTimelineDetails(() => response.data);
  } catch (error) {
    console.error(error);
  }
}

export default getTimelineDetails;
