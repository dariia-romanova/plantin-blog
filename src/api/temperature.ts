import { getGeolocation } from "./geolocation";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY='f50f8c35fccce937bcc405172f217059';



export const getTemperature = async() => {
  const [latitude, longitude] = await getGeolocation();

  return fetch(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => data.main.temp)
}


