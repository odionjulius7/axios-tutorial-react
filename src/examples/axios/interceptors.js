import axios from "axios";

// one can use the custom method globally provide the base url
const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

// making request
authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error); // if error occur
  }
);

// fetching request
authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUND");
    }
    return Promise.reject(error); // if error occur
  }
);

export default authFetch;
