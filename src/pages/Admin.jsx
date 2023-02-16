import React from "react";

import "./Admin.css";

const Admin = () => {
  return (
    <>
      <div className="title">
        <h1>관리자 페이지</h1>
      </div>
      <div className="admin-menus">
        <button className="admin-menu-button" onClick={() => {
          window.location.href = "/admin/uploaditem";
        }}>물건 등록하기</button>
        <button className="admin-menu-button">물건 삭제하기</button>
        <button className="admin-menu-button">물건 수정하기</button>
      </div>
    </>
  );
};

export default Admin;
