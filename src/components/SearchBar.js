import React from 'react'
import { useRef } from 'react'

// import utilis
import { fetchHeros } from '../utilis/utilis'

export default function SearchBar({ setter }) {
  let input = useRef('')
  const handleClick = async (e) => {
    e.preventDefault()
    let value = input.current.value
    if (value === '') return

    try {
      let heros = await fetchHeros(value)
      setter(heros)
    } catch (err) {
      return console.error(err)
    }
  }

  return (
    <form action="">
      <input type="text" name="" placeholder="Search Hero..." ref={input} />
      <button className="btn" onClick={handleClick}>
        Search
      </button>
    </form>
  )
}
