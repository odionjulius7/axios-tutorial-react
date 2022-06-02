import { useEffect } from "react";
import authFetch from "./axios/custom";
import axios from "axios";
const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      // now assume you want to make request to the api url with multpule endpoint and you need the header and as well
      // 'https://course-api.com/react-store-products' is like make the main url global and at any where you want to us the base
      // url just attack the endpoint to it and import the custom setup xomponent there
      const resp1 = await authFetch("/react-store-products"); // our endpoint attatched to the main api url
      console.log(resp1);

      // our regular axios method of fetching/ api calls
      const resp2 = await axios(randomUserUrl);
      console.log(resp2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
