import React from "react";
import { useSelector } from "react-redux";
import ThisDayItem from "./ThisDayItem";
import './ThisDayMore.css'

const ThisDayMore = () => {

    const weatherData = useSelector(state => state.weather.weatherInfo);
    const darkTheme = useSelector(state => state.theme.darkTheme);

    const currTemp = weatherData.main.temp;
    const feels = weatherData.main.feels_like;
    const hum = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const windDir = +weatherData.wind.deg;
    const presure = weatherData.main.pressure;

    let themeAddition = '';

    if (darkTheme){
        themeAddition = 'dark';
    }

    const windDirection = (deg) => {
            if ((deg<30)||(deg>330)){
                return('North');}
            else if ((deg<60)||(deg>30)){
                return('North - East');}
            else if ((deg<120)||(deg>60)){
                return('East');}
            else if ((deg<150)||(deg>120)){
                return('South - East');}
            else if ((deg<210)||(deg>150)){
                return('South');}
            else if ((deg<240)||(deg>210)){
                return('South - West');}
            else if ((deg<300)||(deg>240)){
                return('West');}
            else if ((deg<330)||(deg>300)){
                return('North - West')};
        }
    
    
    const items = [{
        iconId: 'temp',
        name: 'Temperature ',
        value: `${currTemp}°, feels like ${feels}° `,
        id: 1,
    },
    {
        iconId: 'humidity',
        name: 'Humidity ',
        value: `${hum}%`,
        id: 2,
    },
    {
        iconId: 'wind',
        name: 'Wind ',
        value: `${windSpeed} km/h ${windDirection(windDir)}`,
        id: 3,
    },
    {
        iconId: 'presure',
        name: 'Pressure ',
        value: `${presure}  hPa`,
        id: 4,
    }]

    

    return(
        <div className={`thisDayMore ${themeAddition}`}>
            <div className="thisDayMoreItems">
                {/* <img src={cloud} alt="cloud" /> */}
                {items.map((item) => {
                    return(<ThisDayItem item={item} key={item.id}/>);
                })}
            </div>
        </div>
    )
}

export default ThisDayMore;