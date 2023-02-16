import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [equip, setEquip] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/equip/${id}`)
      .then((res) => {
        setEquip(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [equip]);
  /*
  const comments = equip.comments.map((comment) => {
    <h2>{comment}</h2>;
  }); */
  return (
    <div>
      <h1>Name: {equip.name}</h1>
      <h1>Type: {equip.type}</h1>
      <h1>Status: {equip.status}</h1>
      <h1>Place: {equip.place}</h1>
      <div>
        <p>Description: {equip.description}</p>
      </div>
    </div>
  );
};

export default Detail;
