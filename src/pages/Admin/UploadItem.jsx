import React, { useState, useEffect } from "react";
import axios from "axios";

import "./UploadItem.css";

const UploadItem = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {}, [name]);

  useEffect(() => {}, [type]);

  useEffect(() => {}, [status]);

  useEffect(() => {}, [location]);

  useEffect(() => {}, [description]);

  const onClickUpload = () => {
    if (description === "") {
      setDescription("설명 없음");
    }
    axios
      .post("http://localhost:8800/api/equip", {
        name: name,
        type: type,
        status: status,
        location: location,
        description: description,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("물건 업로드에 성공하였습니다.");
          window.location.href = "/admin";
        } else {
          alert("물건 업로드에 실패하였습니다.");
        }
      });
  };

  return (
    <>
      <div className="title">
        <h1>물건 업로드</h1>
      </div>
      <div className="item-info">
        <input
          type="text"
          placeholder="물건 이름"
          className="detail"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="물건 종류"
          className="detail"
          onChange={(e) => {
            setType(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="물건 상태"
          className="detail"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="물건 위치"
          className="detail"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="물건 설명"
          className="detail"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button className="upload-button" onClick={onClickUpload}>
          업로드
        </button>
      </div>
    </>
  );
};

export default UploadItem;
