import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, loaded };
};

export default useFetchData; 
