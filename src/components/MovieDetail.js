function MovieDetail({coverImage, title, year, genres, description, rating}){
  return (
    <div>
        <div>
          <img src={coverImage}/>
          <h3>{title} ({year})</h3>
          <span>rate: {rating}</span>
          <ul>
          {
            genres&&genres.map((value, index)=>{
              return <li key={index}>{value}</li>
            })
          }
          </ul>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default MovieDetail;