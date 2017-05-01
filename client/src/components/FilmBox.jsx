import React from 'react'
import FilmList from './FilmList'

class FilmBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[
        {name: "Star Wars Episode IV: A New Hope", time:"21:00", id: 1}, 
        {name: "Beetlejuice", time:"22:30", id: 2}, 
        {name: "Fear and Loathing in Las Vegas", time:"00:00", id: 3}, 
        {name: "The Thing", time:"20:15", id: 4}
      ]
    }
    this.getShowTimes = this.getShowTimes.bind(this)
  }

  getShowTimes(){
    this.state.data.forEach( (film) => {
      console.log(film.time)
    })
  }

  render(){
    return(
      <div className="film-box">
        <h3>UK Opening This Week</h3>
        <FilmList data={this.state.data}/>
        <button onClick={this.getShowTimes} className="get-showtimes">Get Showtimes</button>
      </div>
    )
  }

}

export default FilmBox