const BASE_URL = 'https://api.geoapify.com/v1/ipinfo?apiKey='
const API_KEY='9a6caf62bd3540a882537eb4477d9381';

export const getGeolocation = () => {
  return fetch(`${BASE_URL}${API_KEY}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => [data.location.latitude, data.location.longitude])
}
