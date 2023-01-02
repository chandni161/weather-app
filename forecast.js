import React, {useEffect, useState} from 'react';




function getForecast() {
      const [data,setData]= useState([])
      const [loading,setLoading]= useState(false)
}  




useEffect(() => {
   async function getForecast () {
     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={"f0637a349fdedb7ad833263353312211"}");
     if (response.ok) {
       const result = await response.json()
       return result.data;
     } else {
       throw Error('eerrr')
     }
   }

   getForecast().then(data => {
     setData(data)
   }).catch(err => {
     console.log(err)
     setData([])
   });

 }, []);

 return (

    data['name']
    Lon = data['coord']['lon']
    Lat = data['coord']['lat']
    Desc = data['weather'][0]['description']
    Temp = data['main']['temp']
    Wind_Speed = data['wind']['speed']
    Press = data['main']['humidity']
    Humidity = datsa['main']['humidity']
 )

export default Forecast;
