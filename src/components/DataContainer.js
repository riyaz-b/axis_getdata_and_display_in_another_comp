import React, { useState, useEffect } from "react";
import DisplayData from "./DisplayData";
import staticData from "./StaticData";
import fetchDynamicData from "./DynamicData";

const DataContainer = () => {
  const [dynamicData, setDynamicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDynamicData();
        setDynamicData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <DisplayData staticData={staticData} dynamicData={dynamicData} />;
};

export default DataContainer;