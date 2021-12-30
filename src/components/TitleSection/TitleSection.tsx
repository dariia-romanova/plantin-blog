import React, { useState } from 'react'
import { useEffect } from 'react'
import { getTemperature } from '../../api/temperature'
import { getGeolocation } from '../../api/geolocation'
import { useMediaQuery } from 'react-responsive';

interface Props {
  searchQuery: string,
  changeSearchQuery: (query: string) => void;
}

export const TitleSection: React.FC<Props> = ({searchQuery, changeSearchQuery }) => {
  const [temperature, setTemperature] = useState<number | null>(null); 

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
      <div className="title-section__wrapper">
        <div className="title-section__content">
          <div className="title-section__info">
          <h2 className="title-section__title">Stay always tuned with planting trends</h2>
          {isMobile ? (
            <p className="title-section__subtitle">
              <span className="title-section__bold">
                Tips &amp; Tricks
              </span>
              {' '}
              selected specially for
              {' '}
              <span className="title-section__bold">
                you!
              </span>
            </p>
          ) : (
            <p
              className="title-section__temperature"
            >
              Current temperature is: {temperature} &deg;C
            </p>
          )}
          
          <form
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="title-section__search-field"
              type="text"
              value={searchQuery}
              onChange={(event) => changeSearchQuery(event.target.value)}
              placeholder="Search"
            />
          </form>
          </div>
        </div>
      </div>

    </section>
  )
}
