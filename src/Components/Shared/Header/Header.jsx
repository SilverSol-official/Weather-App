import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTheme,
  startTheme,
} from "../../../rdx/Features/Theme/themeSlice";
import { fetchWeather } from "../../../rdx/Features/Weather/weatherSlice";
import Button from "react-bootstrap/Button";
import GlobalSVGSelector from "../../../Assets/Icons/Global/globalSvgSelector";
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
  const [cityInput, setCityInput] = useState("");

  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const dispatch = useDispatch();

  let themeAdditionBg = "",
    color = "";

  if (darkTheme) {
    themeAdditionBg = "darkBG";
    color = "darkInput";
  }

  useEffect(() => {
    dispatch(startTheme());
  }, [dispatch]);

  return (
    <div className={`header ${themeAdditionBg}`}>
      <div className="wrapper">
        <div className="logo">
          <GlobalSVGSelector id="logo" />
        </div>
        <div className="title">
          <Link style={{ textDecoration: "none" }} to="/">
            WEATHER
          </Link>
        </div>
      </div>
      <div className={`wrapper ${themeAdditionBg}`}>
        <div className="theme">
          <Button
            variant={darkTheme ? "dark" : "light"}
            onClick={() => dispatch(changeTheme())}
          >
            <GlobalSVGSelector id="theme" />
          </Button>
        </div>
        <div className={`favourite ${themeAdditionBg}`}>
          <InputGroup className={`mb-3 ${themeAdditionBg}`}>
            <input
              type="text"
              placeholder="City name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(event) => setCityInput(event.target.value)}
              value={cityInput}
              className={`search-input ${themeAdditionBg} ${color}`}
            />
            <Link to={`/cities/${cityInput}`}>
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => dispatch(fetchWeather(cityInput))}
              >
                <SearchIcon />
              </Button>
            </Link>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Header;
//hello
