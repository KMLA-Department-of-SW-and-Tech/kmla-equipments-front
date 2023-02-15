import React from "react";

import "./Main.css";

const Main = () => {
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
          <table className="table">
            <thead>
              <tr>
                <th>이름</th>
                <th>종류</th>
                <th>상태</th>
                <th>위치</th>
                <th>신청하기</th>
                <th>신청자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camera</td>
                <td>Camera</td>
                <td>Available</td>
                <td>Room 1</td>
                <td>
                  <button>신청하기</button>
                </td>
                <th>신청자</th>
              </tr>
              <tr>
                <td>Camera</td>
                <td>Camera</td>
                <td>Available</td>
                <td>Room 1</td>
                <td>
                  <button>신청하기</button>
                </td>
                <th>신청자</th>
              </tr>
              <tr>
                <td>Camera</td>
                <td>Camera</td>
                <td>Available</td>
                <td>Room 1</td>
                <td>
                  <button>신청하기</button>
                </td>
                <th>신청자</th>
              </tr>
              <tr>
                <td>Camera</td>
                <td>Camera</td>
                <td>Available</td>
                <td>Room 1</td>
                <td>
                  <button>신청하기</button>
                </td>
                <th>신청자</th>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="find-more">+ 더 찾아보기</button>
      </div>
    </>
  );
};

export default Main;
