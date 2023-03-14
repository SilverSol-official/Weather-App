import MainPage from "./Components/MainPage/MainPage";
import RegForm from "./Components/RegForm/RegForm";
import { Route, Routes } from "react-router";
import Header from "./Components/Shared/Header/Header";
import "./App.css";
import { useSelector } from "react-redux";
import FavCities from "./Components/FavCities/favCities";

const App = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  let themeAdditionBg = "";

  if (darkTheme) {
    themeAdditionBg = "darkBG";
    document.body.style.background = "#0D1117";
  } else {
    document.body.style.background = "#FFFFFF";
  }

  return (
    <div className={`container ${themeAdditionBg}`}>
      <Header />
      <FavCities />
      <Routes>
        <Route path="/cities/:id/*" element={<MainPage />} />{" "}
        <Route path="/registration" exact element={<RegForm />} />{" "}
      </Routes>{" "}
    </div>
  );
};

export default App;
