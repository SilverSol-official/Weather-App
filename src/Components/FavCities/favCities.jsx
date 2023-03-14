import { Box } from "@mui/system";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
const FavCities = () => {

    const favList = useSelector((state)=>state.city.cities);

    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let themeAdditionBg = '';

    if (darkTheme){
        themeAdditionBg = 'darkBg';
    }

    const tabThemeHandler = () => {
        
        if(darkTheme){
            return({background: "#0D1117"});
        }
    }

    return(
        <div className="favCities">
            <Box sx={{ maxWidth: { xs: '100%', sm: 1200 }, maxHeight:'150px', display:'flex' }}>
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

                    {/* <div className={`tenDays ${themeAdditionBg}`}> */}
                                {favList.map((item)=>{
                                    console.log(item)
                                        return(
                                                <Tab key={uuidv4()} label={<Link to={`/cities/${item}`} style={{ textDecoration: 'none' }}>{item}</Link>}></Tab>
                                        )
                                    })}   
                        {/* </div>   */}
                </Tabs>
            </Box>    
        </div>
        
    )
}

export default FavCities;