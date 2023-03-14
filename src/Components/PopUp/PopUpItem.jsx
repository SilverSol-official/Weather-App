import React from "react";
import { useSelector } from "react-redux";
import GlobalSVGSelector from "../../Assets/Icons/Global/globalSvgSelector";

const PopUpItem = ({item}) => {
    const {iconId, name, value} = item;

    const darkTheme = useSelector((state) => state.theme.darkTheme);
    let themeAddition = '';

    if (darkTheme){
        themeAddition = 'dark';
    }

    return(
        <div className={`item ${themeAddition}`}>
            <div className={`indicatorIcon`}><GlobalSVGSelector id={iconId}/></div>
            <div className={`indicatorName ${themeAddition}`}>{name}</div>
            <div className={`indicatorValue ${themeAddition}`}>{value}</div>
        </div>
    )
}

export default PopUpItem;