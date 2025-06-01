import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    // const token = Cookies.get("token");
    // if (!token) {
    //   toast.error("Session expired! Login again.");
    //   navigate("/");
    //   return;
    // }

    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}${url}`
    //     {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    );

      setData(response?.data);
    //   console.log('data >>>', response?.data);
      setError(null);
    } catch (error) {
      if (axios.isCancel(error)) {
        setError(error?.response?.data?.message || error?.message);
        toast.error(error?.response?.data?.message || error?.message);
        setData(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
