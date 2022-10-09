import React from 'react'
import { useState } from 'react'

// import components
import Container from '../components/Container'
import Grid from '../components/Grid'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

const IMG_FANTASTIC = 'portrait_fantastic'

export default function Home() {
  const [heros, setHeros] = useState([])

  let cards

  if (heros) {
    cards = heros.map((hero) => (
      <Card
        name={hero.name}
        id={hero.id}
        key={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ))
  }
  return (
    <Container>
      <h1 className="main-header">Discover Marvel Characters</h1>
      <SearchBar setter={setHeros} />
      <Grid>{cards ? cards : ''}</Grid>
    </Container>
  )
}
