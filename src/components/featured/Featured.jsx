import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
       <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/207611520.jpg?k=886bf8503c28844aafc767a6195ba69bdb56c1a0c1e125bb6cfb63464d95528d&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 className="featuredCity">Şəki</h1>
          <h2>126 Otel Tapıldı</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/362825372.jpg?k=10a1b8df0764ff192aeebe1f196a3662b6128419bbfa1787465ef3a4df1bb17d&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 className="featuredCity">Gəncə</h1>
          <h2>45 Otel Tapıldı</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/343649444.jpg?k=9eb609cb2fe21741cc7fd1cb60b6bbf03ed6ed8a1de669f72bc8883f0583fc67&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 className="featuredCity">Bakı</h1>
          <h2>787 Otel Tapıldı</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
