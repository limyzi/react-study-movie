import styles from './MovieDetail.module.css';

function MovieDetail({coverImage, title, year, genres, description, rating}){
  return (
    <div>
        <div className={styles.movie}>
          <img src={coverImage} alt={title} className={styles.movie__img}/>
          <div>
          <h3 className={styles.movie__title}>{title} ({year})</h3>
          <div className={styles.movie__rate}>rate: {rating}</div>
          <p>{description.length > 700 ? `${description.slice(0, 700)}...` : description}</p>
          <ul className={styles.movie__genres}>
          {
            genres&&genres.map((value, index)=>{
              return <li key={index}>{value}</li>
            })
          }
          </ul>
          </div>
        </div>
    </div>
  )
}

export default MovieDetail;