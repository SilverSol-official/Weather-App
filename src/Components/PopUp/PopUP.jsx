import Modal from 'react-bootstrap/Modal';
import GlobalSVGSelector from '../../Assets/Icons/Global/globalSvgSelector';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './PopUp.css';
import { useSelector } from 'react-redux';
import PopUpItem from './PopUpItem';

const PopUp = (props) =>{


const darkTheme = useSelector((state) => state.theme.darkTheme);
const forecastData = useSelector(state => state.weather);
const i = forecastData.popUpModal;
console.log('i: ',i);
    // console.log(id);
    // const currTemp = forecastData.forecastInfo.forecast.forecastday[id].day.avgtemp_c;
    // const feels = weatherData.main.feels_like;
    // const hum = weatherData.main.humidity;
    // const windSpeed = weatherData.wind.speed;
    // const windDir = +weatherData.wind.deg;
    // const presure = weatherData.main.pressure;

let themeAddition = '', color='';

    if (darkTheme){
        themeAddition = 'dark';
        color='btnColor';
    }


  const items = [{
    iconId: 'temp',
    name: 'Temperature ',
    // value: `${currTemp}° - feels like 17° `,
    id: 1,
},
{
    iconId: 'humidity',
    name: 'Humidity ',
    value: '69% ',
    id: 2,
},
{
    iconId: 'wind',
    name: 'Wind ',
    value: '24 km/h  north - west ',
    id: 3,
},
{
    iconId: 'presure',
    name: 'Precipitation ',
    value: 'No precipitations ',
    id: 4,
}]

    

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={themeAddition}>
        <Modal.Title id="contained-modal-title-vcenter">
          Today
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={themeAddition}>
        <div className={`modalWrapper ${themeAddition}`}>
          <div className={`modalThisDay ${themeAddition}`}>
                <div className="topBlock">
                    <div className="topBlockWrapper">
                      <div className="currentTempPOP"> <KeyboardArrowUpIcon /> 18°</div> 
                      <div className="currentTempPOP"> <KeyboardArrowDownIcon /> 15°</div>
                    </div>
                    <GlobalSVGSelector id='sun'/>
                </div>
                <div className="bottomBlock">
                    <div className={`thisCity ${color} `}>City: <span>Kharkiv</span></div>
                </div>
          </div>
          <div className={`modalThisDayMore ${themeAddition}`}>
            <div className="thisDayMoreItems">
                {/* <img src={cloud} alt="cloud" /> */}
                {items.map((item) => {
                    return(<PopUpItem item={item} key={item.id}/>);
                })}
            </div>
          </div>  
        </div>
        
      </Modal.Body>
    </Modal>
  );
}


export default PopUp;