import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

// GET METHOD
const useFetchData = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    
    return () => {};
  }, [])

  return data;
}

export default useFetchData;