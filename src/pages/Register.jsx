import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Register.css";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(studentId);
  }, [studentId]);

  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);

  const onClickRegister = async () => {
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    await axios
      .post("http://localhost:8800/api/auth/register", {
        username: id,
        password: password,
        name: name,
        schoolId: studentId,
        phone: phoneNumber,
      })
      .then(async (res) => {
        if (res.status === 200) {
          await axios
            .post("http://localhost:8800/api/auth/login", {
              username: id,
              password: password,
            })
            .then((res) => {
              if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                window.location.href = "/";
              } else {
                window.location.href = "/";
              }
            });
          alert("회원가입에 성공하였습니다.");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
  };

  return (
    <>
      <div className="title">
        <h1>회원가입</h1>
      </div>
      <div className="register-form">
        <input
          type="text"
          placeholder="아이디"
          className="register-input"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="register-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="register-input"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="이름"
          className="register-input"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="학번"
          className="register-input"
          onChange={(e) => {
            setStudentId(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="전화번호"
          className="register-input"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        ></input>
        <button className="submit-button" onClick={onClickRegister}>
          회원가입
        </button>
      </div>
    </>
  );
};

export default Register;
