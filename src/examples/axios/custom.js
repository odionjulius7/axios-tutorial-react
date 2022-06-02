import axios from "axios";

// custom axios setup is like global setup but more secure when adding more parameters dan just header
// when there is need for a second argument when fetching a data to convert the data info to json format
// to add header to our fetched data/post data
const authFetch = axios.create({
  // now assume you want to make request to the api url with multpule endpoint and you need the header and as well
  // 'https://course-api.com/react-store-products' is like make the main url global and at any where you want to us the base
  // url just attack the endpoint to it and import the custom setup component there
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
