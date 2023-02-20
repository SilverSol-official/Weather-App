import React from "react";
import TenDaysCard from "./TenDaysCard";
import { useSelector } from "react-redux";
import { daySelector } from "./DaySelector";
import { Col, Container, Row } from "react-bootstrap";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import './TenDays.css';



const TenDays = ({number}) => {

    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const forecastData = useSelector(state => state.weather);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let themeAdditionBg = '';

    if (darkTheme){
        themeAdditionBg = 'darkBg';
    }

    let cardInfo = [{
        day: 'Today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'Tomorow',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id:uuidv4(),
    },
    {
        day: 'today',
        date:'28 feb.',
        weatIcon: 'sun',
        temp:['+18°','+15°'],
        weatCond:'sunny',
        id: uuidv4(),
    },
]

    for(let i = 0;i<10;i++){
        if(i>1){
           cardInfo[i].day=daySelector(forecastData.forecastInfo.forecast.forecastday[i].date);  
        }
        cardInfo[i].date=forecastData.forecastInfo.forecast.forecastday[i].date.slice(5);
        cardInfo[i].temp=[`${forecastData.forecastInfo.forecast.forecastday[i].day.maxtemp_c}°`,`${forecastData.forecastInfo.forecast.forecastday[i].day.mintemp_c}°`];
        cardInfo[i].weatCond=forecastData.forecastInfo.forecast.forecastday[i].day.condition.text;
        cardInfo[i].weatIcon=forecastData.forecastInfo.forecast.forecastday[i].day.condition.icon;
    }  

    return(
        <>
        <div className='pcVariant'>
            <Container>
                <Row>
                <div className={`tenDays ${themeAdditionBg}`}>
                            {cardInfo.slice(0,number).map((item)=>{
                                    return(
                                            <Col ><TenDaysCard item={item} key={item.id} /></Col>
                                    )
                                })}   
                    </div>  
                </Row>
            </Container>    
        </div>
        <div className="mobileVariant">
         <Box sx={{ maxWidth: { xs: '100%', sm: 1200 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                className={`tenDays ${themeAdditionBg}`}
            >

                {/* <div className={`tenDays ${themeAdditionBg}`}> */}
                            {cardInfo.slice(0,number).map((item)=>{
                                    return(
                                            <Tab label={<TenDaysCard item={item} key={item.id} />}></Tab>
                                    )
                                })}   
                    {/* </div>   */}
            </Tabs>
        </Box>    
        </div>
                              
       
       </>
    )
}

export default TenDays;







