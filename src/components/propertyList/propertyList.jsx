import React from "react";
import "./propertyList.css";

const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/336867908.jpg?k=27d222148535f3e6c6aba3faecf3e4fa570d9db94d9aa3042ad8fb6ff633bce8&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Otellər</h1>
          <h2>300+ Otel Tapıldı</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/364242492.jpg?k=fad412cadd3d5b6cdcb793f7844e67e4fb1256b990a298136a5d699c3f84be1a&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Evlər</h1>
          <h2>230+ Ev Tapıldı</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/328665585.jpg?k=5a9296902addcec02b52af82ca082fa203b6e3d14c7f9c240e59617699944e61&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villalar</h1>
          <h2>80+ Villa Tapıldı</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/351979352.jpg?k=6ecdad5d5d1d2e9807628e853b8e0d161abf7aa6371db011b9752395aaf0f5b0&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kurort</h1>
          <h2>100+ Kurort Yeri Tapıldı</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/128035864.jpg?k=59131dc06306f98ef9dd225eb1f27319b30308e14e83f243862225858d8906ff&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kabinlər</h1>
          <h2>50+ Kabin Tapıldı</h2>
        </div>
      </div>
    </div>
  );
};

export default propertyList;
