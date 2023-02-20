import React, { useEffect } from "react";
import { fetchForecast, fetchWeather } from "../../rdx/Features/Weather/weatherSlice";
import { useDispatch,useSelector } from "react-redux";
import DaysButtons from "../DaysButtons/DaysButtons";
import ThisDay from "../ThisDay/thisDay";
import ThisDayMore from "../ThisDayMore/ThisDayMore";
import {Routes, Route, useParams} from 'react-router-dom';
import './MainPage.css';
import TenDays from "../TenDays/TenDays";
import SpinnerButton from "../Spiners/SpinnerButton";
import { Col, Container, Row } from "react-bootstrap";

const MainPage = () => {
    
    const {status,error} = useSelector(state=>state.weather);
    const {forecastStatus,forecastError} = useSelector(state=>state.weather);
    const dispatch = useDispatch()

    const {id}= useParams();

    console.log('status:',status);
    console.log('error:',error);

    useEffect(()=>{
        dispatch(fetchForecast(id));
        dispatch(fetchWeather(id));
        
    },[dispatch,id]);

    const statusCheck = () => {
        if(status ==='loading' && error === null){
            return(<h2>Loading...</h2>);
        } else if (error!=null){
            return(<h2>An error occured: {error}</h2>);
        } else {return(<div className='MainPageWrapper'>
            <Container>
                <Row>
                    <Col lg={3}><ThisDay/></Col>
                    <Col lg={9}><ThisDayMore/></Col>
                </Row>
            </Container>
                
            </div>)}
    }
    const statusCheckF = () => {
        if(forecastStatus ==='loading' && forecastError === null){
            return(
                <>
                    <SpinnerButton/>
                    <SpinnerButton/>
                    <h2>Loading...</h2>

                </>
            );
        } else if (forecastError!=null){
            return(<h2>An error occured: {forecastError}</h2>);
        } else {return(
            <>
            <DaysButtons city={id}/>
            <Routes>
                <Route path='/for-week' element={<TenDays number={7}/>}/>
                <Route path='/for-10-days' element={<TenDays number={10}/>}/>
            </Routes>
            </>
                )}
    }

    return(
        <>
            {statusCheck()}
            
            {statusCheckF()}
            
        </>
    )
}

export default MainPage;