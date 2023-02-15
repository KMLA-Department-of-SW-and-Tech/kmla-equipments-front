import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const onClickLogin = () => {
    axios
      .post("http://localhost:8800/api/auth/login", {
        username: id,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
          console.log(res.data);
          if (res.data.user.isAdmin) {
            localStorage.setItem("isAdmin", true);
          } else {
            localStorage.setItem("isAdmin", false);
          }
        } else {
          alert("로그인에 실패하였습니다.");
        }
      });
  };

  return (
    <>
      <div className="title">
        <h1>KMLA Equipments</h1>
        <p>민사고 융합프로젝트 장비 대여 시스템</p>
      </div>
      <div className="login">
        <div className="login-form">
          <input
            type="text"
            placeholder="아이디"
            className="input"
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="비밀번호"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="login-button" onClick={onClickLogin}>
            로그인
          </button>
          <button
            className="register-button"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
