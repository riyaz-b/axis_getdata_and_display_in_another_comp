const fetchDynamicData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error.message); // Throw the error for the caller to handle
    }
  };
  
  export default fetchDynamicData;