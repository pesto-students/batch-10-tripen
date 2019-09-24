import axios from "axios";

const postTimelineDetails = (data, successCallback, errorCallback) => {
  console.log("data :", JSON.stringify(data));
  axios
    .put(`http://localhost:3030/api/timeline`, { ...data })
    .then(res => {
      successCallback(res);
      //   console.log(res);
      //   console.log(res.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

export default postTimelineDetails;
