import React from 'react'
import Film from './Film'

const FilmList = (props) => {
  const filmNodes = props.data.map( (film) => { 
    return (
      <Film film={ film } key={ film.id }>
      </Film>
    )
  })

  return(
    <div className="filmList">
      { filmNodes }
    </div>
  )
}

export default FilmList