import React from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './DaysButtons.css';
import { useSelector } from "react-redux";




const DaysButtons = ({city}) => {
    const darkTheme = useSelector((state) => state.theme.darkTheme); 
    return(
        <div className="DaysButtons">
            <div className="weekButton">
            <Link to={`/${city}/for-week`}> <Button variant={`outline-${darkTheme? 'secondary':'dark'}`}>Week</Button></Link>
            </div>
            <div className="tenDaysButton">
                <Link to={`/${city}/for-10-days`}><Button variant={`outline-${darkTheme? 'secondary':'dark'}`}>10 days</Button></Link>
            </div>
        </div>
    )
}

export default DaysButtons;