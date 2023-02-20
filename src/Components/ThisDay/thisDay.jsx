import React from "react";
import { useSelector } from "react-redux";
import GlobalSVGSelector from "../../Assets/Icons/Global/globalSvgSelector";
import './ThisDay.css';

const ThisDay = () => {



    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const weatherData = useSelector(state=>state.weather.weatherInfo);  
    const date = new Date();
    const time = `${date.getHours()}:00`;
    const name = weatherData.name;
    const currTemp = +weatherData.main.temp;
    const icon = weatherData.weather[0].icon;


    

    let themeAddition = '';

    if (darkTheme){
        themeAddition = 'dark';
    }

    return(
        <div className={`thisDay ${themeAddition}`}>
            <div className="topBlock">
                <div className="topBlockWrapper">
                   <div className="currentTemp">{Math.round(currTemp)}°</div>
                    <div className={`currentDay ${themeAddition}`}>Today</div> 
                </div>
                 <GlobalSVGSelector id={icon}/>
                {/* <img src= {`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" width="150px" /> */}
            </div>
            <div className={`bottomBlock `}>
                <div className={`thisTime ${themeAddition} `}>Time: <span>{time}</span></div>
                <div className={`thisCity ${themeAddition} `}>City: <span>{name}</span></div>
            </div>
        </div>
    )
}

export default ThisDay;