import React, { useState, useEffect } from "react";
import { Axios, getTokenFromLocalStorage } from "../config";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("/categories", {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    }).then(response => {
      console.log("Categories", response);
      setData(response.data);
    });
  }, []);

  return (
    <div style={{ width: "80%" }}>
      <h2>Category Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
