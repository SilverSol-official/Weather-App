import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GlobalSVGSelector from "../../Assets/Icons/Global/globalSvgSelector";
import StarIcon from '@mui/icons-material/Star';


import './ThisDay.css';
import { addCity, removeCity } from "../../rdx/Features/City/citySlice";


const ThisDay = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const weatherData = useSelector(state=>state.weather.weatherInfo); 
    const checklist = useSelector(state => state.city.cities);
    const dispatch = useDispatch();

    const date = new Date();
    const time = `${date.getHours()}:00`;
    const name = weatherData.name;
    const currTemp = +weatherData.main.temp;
    const icon = weatherData.weather[0].icon;

    const [selected,setSelected] = useState(false);

  useEffect(()=>{
    if(checklist.includes(name)){
            setSelected(true);
        }else {setSelected(false)}
        console.log('selected: ',selected);
  },[name,checklist,selected])
        
    let themeAddition = '';

    if (darkTheme){
        themeAddition = 'dark';
    }

    const setSelectBut = () => {
        if (selected){
            setSelected(false);
            dispatch(removeCity({city:name}))
        } else {
            setSelected(true);
            dispatch(addCity({city:name}));
        }
    }

    const favButtonHandler = () => {
        
        if(selected){
            return(<StarIcon style={{fill: "#E5E201"}}/>);
        }else{
            return(<StarIcon style={{fill: "gray"}}/>);
        }
    }
// setSelectBut
//                     ();
    return(
        <div className={`thisDay ${themeAddition}`}>
            <div className='favButton'>
                    <button className={darkTheme?'setFavD':'setFavL'} onClick={()=>setSelectBut()}>
                        {favButtonHandler()}
                    </button> 
                </div>
            <div className="topBlock">
                <div className="topBlockWrapper">
                    <div className="currentTemp">{Math.round(currTemp)}°</div>
                    <div className={`currentDay ${themeAddition}`}>Today</div> 
                </div>
                <GlobalSVGSelector id={icon}/>
                
            </div>
            <div className={`bottomBlock `}>
                <div className={`thisTime ${themeAddition} `}>Time: <span>{time}</span></div>
                <div className={`thisCity ${themeAddition} `}>City: <span>{name}</span></div>
            </div>
        </div>
    )
}

export default ThisDay;