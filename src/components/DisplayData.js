import React from "react";

const DisplayData = ({staticData =[], dynamicData = null }) => {
  console.log("staticData- ", staticData);
  console.log("dynamicData- ", dynamicData);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Static Data Table */}
      <div>
        <h2>Static Data</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {staticData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dynamic Data Table */}
      <div>
        <h2>Dynamic Data</h2>
        <table border="1">
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {dynamicData && (
              <tr>
                <td>{dynamicData.userId}</td>
                <td>{dynamicData.id}</td>
                <td>{dynamicData.title}</td>
                <td>{dynamicData.completed ? "Yes" : "No"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayData;