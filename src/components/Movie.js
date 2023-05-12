import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({coverImage, title, summary, genres, id}){
 return (
  <div>
    <img src={coverImage} alt={title}/>
    <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
    <p>{summary}</p>
    <ul>
      {genres&&genres.map(g=>(
      <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
 );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
	coverImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;