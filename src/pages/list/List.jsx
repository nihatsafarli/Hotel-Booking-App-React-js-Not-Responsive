import React from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Axtar</h1>
            <div className="lsItem">
              <label>İstiqamət</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Giriş vaxtı</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} && ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Özəlliklər</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Qiymət (azn) <small>(1 gecə)</small>
                  </span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Qiymət (azn) <small>(1 gecə)</small>
                  </span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Böyüklər</span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Uşaqlar</span>
                  <input type="number" min={0} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Otaq</span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Axtar</button>
          </div>

          <div className="listResults">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
