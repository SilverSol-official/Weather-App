import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { startCity } from "../../rdx/Features/City/citySlice";
import { useDispatch } from "react-redux";

const FavCities = () => {
  const favList = useSelector((state) => state.city.cities);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let themeAdditionBg = "";

  if (darkTheme) {
    themeAdditionBg = "darkBg";
  }

  const tabThemeHandler = () => {
    if (darkTheme) {
      return { background: "#0D1117" };
    }
  };

  useEffect(() => {
    dispatch(startCity());
  }, [dispatch]);

  const listCheck = () => {
    if (favList) {
      return favList.map((item) => {
        console.log(item);
        return (
          <Tab
            key={uuidv4()}
            label={
              <Link to={`/cities/${item}`} style={{ textDecoration: "none" }}>
                {item}
              </Link>
            }
          ></Tab>
        );
      });
    }
  };

  return (
    <div className="favCities">
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: 1200 },
          maxHeight: "150px",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          className={` ${themeAdditionBg}`}
          style={tabThemeHandler()}
        >
          {listCheck()}
        </Tabs>
      </Box>
    </div>
  );
};

export default FavCities;
