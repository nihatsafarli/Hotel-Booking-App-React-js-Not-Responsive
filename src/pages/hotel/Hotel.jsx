import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

import { MdLocationOn } from "react-icons/md";

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401563086.jpg?k=55e90afaab3d53323c4512f3c3ca71204f2a027ab76c29cc152ce386382ad454&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401564260.jpg?k=5d978945aa8de7240a5b8dda24fe6e3de912f4af8412be7cc475512a465f6d7d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401567758.jpg?k=5e8fb6de80a835af1a5c0f7066caa05d6f5a973a0ee6cb4abaec477ceaaf60fb&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401561220.jpg?k=2dee6512686fabf555ce6d4120b7bebfa49a4a879e80c9fa5caf8d339b4c7549&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401567415.jpg?k=2203c1c1bcadb25f103778653687e30fccd6205aac0481da9eccac57c9d41508&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401565878.jpg?k=6948349f388f963880add739d882163ad9320407dceca4d16bcfba8af7c0412d&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;
    if (direction === "left") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSlideIndex(newSlideIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <AiFillCloseSquare
              className="close"
              onClick={() => setOpen(false)}
            />
            <BsFillArrowLeftSquareFill
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideIndex].src} alt="" className="sliderImg" />
            </div>
            <BsFillArrowRightSquareFill
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Rezervasiya Et</button>
          <h1 className="hotelTitle">Sapphire Inn Hotel</h1>
          <div className="hotelAddress">
            <MdLocationOn />
            <span>Bak??, S??bay??l</span>
          </div>
          <span className="hotelDistance">
            M??k??mm??l Yer-M??rk??z?? 100m m??saf??d??
          </span>
          <span className="hotelPriceHighLight">
            ??ndi rezervasiya et v?? 20% endirimd??n faydalan
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Bak??n??n m??rk??zind??, ??????ri????h??r?? v?? F??vvar??l??r Meydan??na piyada 5
                d??qiq??
              </h1>
              <p className="hotelDesc">
                Bak??n??n m??rk??zind??, ??????ri ????h??r?? v?? F??vvar??l??r Meydan??na piyada
                5 d??qiq??lik m??saf??d?? yerl??????n Sapphire Inn Hotel pulsuz Wi-Fi v??
                ????xsi parkinqi olan m??asir v?? rahat otaqlar t??klif edir. Otelin
                otaqlar?? kondisionerlidir v?? klassik dizayna v?? m??asir mebell??r??
                malikdir. Otaqlarda d??z ekran peyk televiziyas?? var. ????xsi vanna
                ota????nda hamam v?? ya du??, sa?? qurutma ma????n?? v?? pulsuz tualet
                l??vazimatlar?? var. B??zi otaqlarda balkon var. Akhundoff
                Restaurant beyn??lxalq m??tb??xi, el??c?? d?? g??z??l ????rab se??imini
                t??qdim edir.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Otelin ??sas ??z??llikl??ri</h1>
              <span>S??h??r yem??yi.. Oteld?? pulsuz parkinq m??vcuddur</span>
              <h2>
                {" "}
                <b>1800 azn</b> (12 gec??){" "}
              </h2>
              <button>Rezervasiya et</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
