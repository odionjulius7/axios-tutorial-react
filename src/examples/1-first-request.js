import axios from "axios";
import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    // try/catch a js method of catching error when making api call and returning promise
    try {
      // using axios we must always pass in the url to fetch data from
      const response = await axios(url);

      // note: the info we make use of when fetching with axios is data array from the response
      const data = response.data;
      console.log(data);
    } catch (error) {
      // what makes axios better than fetch() is the way it explicitly treat error, explains the clearly
      // while fetch deal with errors defined in server
      console.log(error.response);
      // console.log(error.response.data); // to get the error description
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
