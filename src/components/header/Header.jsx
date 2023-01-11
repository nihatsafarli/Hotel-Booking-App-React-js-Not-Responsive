import React from "react";
import { useState } from "react";
import "./header.css";
import { MdHotel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { FaBed, FaTaxi } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: {destination,date,openOptions} });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            {<MdHotel />}
            <span>Otellər</span>
          </div>
          <div className="headerListItem">
            {<MdFlight />}
            <span>Təyyarə Biletləri</span>
          </div>
          <div className="headerListItem">
            {<AiFillCar />}
            <span>Kirayə Maşınlar</span>
          </div>
          <div className="headerListItem">
            {<FaHotel />}
            <span>Əyləncə</span>
          </div>
          <div className="headerListItem">
            {<FaTaxi />}
            <span>Taksi Xidməti</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              50% endirimdən yararlanmaq istəyirsiz? Qeydiyyatdan keçin
            </h1>
            <p className="headerDesc">
              Qeydiyyatdan keçdikdən sonra ilk otel rezervasiyasında
              bölgələrdəki ( Şəki, Qəbələ, Lənkəran, Gəncə, Quba, Lənkəran )
              otellərdə 50% endirim fürsətindən yararlanın..
            </p>
            <button className="headerBtn">Giriş / Qeydiyyat</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                {<FaBed className="headerIcon" />}
                <input
                  type="text"
                  placeholder="Hara getmək istəyirsiz?"
                  className="headerSearchInput"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                {<BsFillCalendar2DateFill className="headerIcon" />}
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} tarixlər ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                {<BsPeopleFill className="headerIcon" />}
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} Böyük · ${options.children} Uşaq · ${options.room} Otaq `}{" "}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Böyüklər</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "decrease")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.adult}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "increase")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Uşaqlar</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "decrease")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.children}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "increase")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Otaq</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "decrease")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.room}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "increase")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerSearchBtn" onClick={handleSearch}>
                  Axtar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
