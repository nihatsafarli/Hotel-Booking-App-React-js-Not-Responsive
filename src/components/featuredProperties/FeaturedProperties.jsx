import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/246670258.jpg?k=d1ed14aedbb2d4847c13beddc09d4773318788304080e7355e312bfc582faa9a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Marxal Resort & Spa</span>
        <span className="fpCity">Şəki</span>
        <span className="fpPrice">150azn'dən başlayan qiymətlər</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>İnanılmaz</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/136297829.jpg?k=5577fc579f32eff06d5c378aa568f2fae042be1d074a2c681d5ad2293d228606&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Quba Palace Hotel</span>
        <span className="fpCity">Quba</span>
        <span className="fpPrice">180azn'dən başlayan qiymətlər</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>İnanılmaz</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/362825372.jpg?k=10a1b8df0764ff192aeebe1f196a3662b6128419bbfa1787465ef3a4df1bb17d&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Premium Hotel Ganja</span>
        <span className="fpCity">Gəncə</span>
        <span className="fpPrice">130azn'dən başlayan qiymətlər</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>İnanılmaz</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/195802457.jpg?k=4034164b8d03a946b3e99a9163c3a177ceca4298a015eefdc92959e215bbe5cc&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Royal Palace Hotel Baku</span>
        <span className="fpCity">Bakı</span>
        <span className="fpPrice">120azn'dən başlayan qiymətlər</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Mükəmməl</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
