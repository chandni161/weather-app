



import { useSelector, useDispatch } from 'react-redux';
import { setSearchKeyword, setCityForcastData } from './Action/action';
import './App.css';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App() {
  const dispatch = useDispatch();
  const {searchKeyword, data} = useSelector(state => state.weather);
  const handleOnChange = (event) => {
    dispatch(setSearchKeyword(event.target.value));
  }

  const getWeather = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?cnt=10&units=metric&q=${searchKeyword}&appid=f0637a349fdedb7ad833263353312211`);
    const result = await response.json();
   return result;
  }
  
  const handleOnclick = () => {
    getWeather().then(data => {
      dispatch(setCityForcastData(data))
    });
  }

  return (
    <div className="App">
      <h1>Current Weather</h1>
      <input type="text" className='searchTerm' placeholder="Search.." onChange={handleOnChange}></input>
      <button className='searchButton' onClick={handleOnclick}>submit</button>
      <WeatherDetails data={data}/>
    </div>
  );
}

export default App;
