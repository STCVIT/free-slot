import React, { useState, useEffect } from "react";

export default function Dat() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/output")
      .then((res) => console.log(res))
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
}
