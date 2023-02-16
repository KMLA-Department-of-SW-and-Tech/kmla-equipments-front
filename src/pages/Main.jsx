import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./Main.css";

const Main = () => {
  const [page, setPage] = useState(0);
  const [equipments, setEquipments] = useState([]);

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  useEffect(() => {
    axios.get("http://localhost:8800/api/equip").then((res) => {
      setEquipments(res.data);
    });
  }, []);
  const totalPage = Math.ceil(equipments.length / 10);

  const tableData = equipments
    .slice(page * 10, page * 10 + 10)
    .map((equipment) => {
      if (equipment.status === "대여중") {
        if (equipment.whoRegistered === decoded._id) {
          return (
            <tr>
              <td>{equipment.name}</td>
              <td>{equipment.type}</td>
              <td>{equipment.status}</td>
              <td>{equipment.place}</td>
              <td>
                <button
                  className="equip-button"
                  onClick={() => {
                    axios
                      .patch(
                        `http://localhost:8800/api/equip/cancel/${equipment._id}`
                      )
                      .then((res) => {
                        console.log(res);
                        alert("취소 완료!");
                        window.location.href = "/";
                      })
                      .catch((err) => {
                        alert("취소에 실패했습니다.");
                      });
                  }}
                >
                  취소하기
                </button>
              </td>
            </tr>
          );
        } else {
          return (
            <tr>
              <td>{equipment.name}</td>
              <td>{equipment.type}</td>
              <td>{equipment.status}</td>
              <td>{equipment.place}</td>
              <td>대여불가</td>
            </tr>
          );
        }
      } else if (equipment.status === "수리중") {
        return (
          <tr>
            <td>{equipment.name}</td>
            <td>{equipment.type}</td>
            <td>{equipment.status}</td>
            <td>{equipment.place}</td>
            <td>대여불가</td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{equipment.name}</td>
            <td>{equipment.type}</td>
            <td>{equipment.status}</td>
            <td>{equipment.place}</td>
            <td>
              <button
                className="equip-button"
                onClick={() => {
                  axios
                    .patch(
                      `http://localhost:8800/api/equip/register/${equipment._id}`,
                      {
                        whoRegistered: decoded._id,
                      }
                    )
                    .then((res) => {
                      console.log(res);
                      alert("신청 완료!");
                      window.location.href = "/";
                    })
                    .catch((err) => {
                      if (err.status === 409) {
                        alert("이미 신청한 장비입니다.");
                      } else {
                        alert("신청에 실패했습니다.");
                      }
                    });
                }}
              >
                신청하기
              </button>
            </td>
          </tr>
        );
      }
    });

  var navBar;
  if (totalPage === 1) {
    navBar = <></>;
  } else if (page === 0) {
    navBar = (
      <div>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          다음
        </button>
      </div>
    );
  } else if (page === totalPage - 1) {
    navBar = (
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          이전
        </button>
      </div>
    );
  } else {
    navBar = (
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          이전
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          다음
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="title">
        <h1>KMLA Equipments</h1>
        <p>민사고 융합프로젝트 장비 대여 시스템</p>
      </div>
      <div className="main">
        <div className="search-bar">
          <input type="text" placeholder="검색하기" className="search"></input>
          <button className="search-button">검색하기</button>
        </div>
        <div className="equip-list">
          <table>
            <thead>
              <tr>
                <th>장비 이름</th>
                <th>장비 종류</th>
                <th>장비 상태</th>
                <th>장비 위치</th>
                <th>신청하기</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
        {/* Navigation page bar*/}
        <div className="page-bar">{navBar}</div>
      </div>
    </>
  );
};

export default Main;
