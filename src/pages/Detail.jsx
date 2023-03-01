import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [equip, setEquip] = useState({});
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/equip/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setStatus(true);
        }
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

  if (!status) {
    return <div>요청하신 물건은 존재하지 않습니다.</div>;
  } else {
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
  }
};

export default Detail;
