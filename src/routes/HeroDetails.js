import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// import hooks
import { useParams } from 'react-router-dom'

// import utlis
import { fetchHero } from '../utilis/utilis'

export default function HeroDetails() {
  let { id } = useParams()

  const [hero, setHero] = useState()

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err))
  }, [])
  // if (hero) {
  //   name = hero.data.results[0].name;
  //   description = hero.data.results[0].description;
  //   thumbnailPath = hero.data.results[0].thumbnail.path;
  //   thumbnailExtension = hero.data.results[0].thumbnail.extension;
  //   thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
  //   series = hero.data.results[0].series.items;
  // }
  if (!hero) return

  return (
    <div className="container large">
      <div className="hero__details-container">
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt="hero full size"
        />
        <div className="hero_details">
          <h4>Name</h4>
          <p>{hero.name}</p>
          {hero.description ? (
            <>
              <h4>Decription</h4>
              <p>{hero.description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {hero.series.items.map((s) => (
                <li key={Math.random() * 1000}>{s.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
