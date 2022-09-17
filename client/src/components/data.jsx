import React, { useState, useEffect } from "react";

export default function Dat() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:3000/output")
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        setData(data);
        //console.log(data);
      });
  }, []);
  return <></>;
}
