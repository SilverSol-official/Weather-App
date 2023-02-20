import React from "react";
import './TenDays.css';
import { useSelector } from "react-redux";



const TenDaysCard = ({item}) => {
    const {day, date, weatIcon, temp, weatCond} = item;
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    return(
        <div className="tenDayCard">
            <div className="tenDayWrapper">
                <div className={`dayLabel ${darkTheme? 'btnColor':''}`}>{day}</div>
                <div className="dateLabel">{date}</div>
            </div>
            <div className="weatIcon"><img src={weatIcon} alt="weat icon" width='50px'/></div>
            <div className="tenDayWrapper">
                <div className={`maxTempLabel ${darkTheme? 'btnColor':''}`}>{temp[0]}</div>
                <div className="minTempLabel">{temp[1]}</div>
                <div className="weatCondLabel">{weatCond}</div> 
            </div>
        </div>
    )
}

export default TenDaysCard;