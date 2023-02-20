import React from "react";
import axios from "axios";

import "./Admin.css";

const Admin = () => {
  const onClickReset = () => {
    if (window.confirm("예약을 초기화하시겠습니까?")) {
      console.log("HERE")
      axios
        .patch("http://localhost:8800/api/equip/reset")
        .then((res) => {
          if (res.data.success === true) {
            alert("예약이 초기화되었습니다.");
          } else {
            alert("예약 초기화에 실패했습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="title">
        <h1>관리자 페이지</h1>
      </div>
      <div className="admin-menus">
        <button
          className="admin-menu-button"
          onClick={() => {
            window.location.href = "/admin/uploaditem";
          }}
        >
          물건 등록하기
        </button>
        <button className="admin-menu-button">물건 삭제하기</button>
        <button className="admin-menu-button" onClick={onClickReset}>
          예약 초기화
        </button>
      </div>
    </>
  );
};

export default Admin;
