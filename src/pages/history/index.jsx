import React, { useState, useEffect } from "react";
import "./styles.css";
import ChartViewer from "../../container/history/ChartViewer";

export default function History() {
  const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
      let array = [...data, val];
      array.shift();
      updateData(array);
    }, 2000);
    return () => {
      window.clearInterval(interval);
    };
  }, [data]);
  return (
    <div className="App">
      <ChartViewer data={data} title="History" />
    </div>
  );
}
