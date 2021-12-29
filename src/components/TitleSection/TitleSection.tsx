import { useState } from 'react'
import { useEffect } from 'react'
import { getTemperature } from '../../api/temperature'
import { getGeolocation } from '../../api/geolocation'
import './title-section.scss'


export const TitleSection = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  const loadTemperature = async() => {
    const t = await getTemperature();

    setTemperature(Math.round(t));
  }

  useEffect(() => {
    loadTemperature();
    getGeolocation();
  },[])


  return (
    <section className="title-section">
      <div className="title-section__content">
        <h2 className="title-section__title">Stay always tuned with planting trends</h2>
        <p className="title-section__temperature">Current temperature is: {temperature} &deg;C</p>
      </div>

    </section>
  )
}