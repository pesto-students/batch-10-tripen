import axios from "axios";

const postTimelineDetails = (data, successCallback, errorCallback) => {
  axios
    .post(`https://jsonplaceholder.typicode.com/users`, { ...data })
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
