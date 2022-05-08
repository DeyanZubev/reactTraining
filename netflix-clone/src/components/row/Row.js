import { useEffect, useState } from "react";

import { firebaseDatabase } from "../../firebase/firebase";

function Row(props) {
    const [movies, setMovies] = useState([]);

    const { title, movieType } = props;

    const leafRoot = 'movies';

    useEffect(() => {
        fetchMovies(movieType);
    }, []);

    const fetchMovies = (movieType) => {
        const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
        movieRef.on("value", (snapshot) => {
            const movies = snapshot.val();
            if (movies && movies.length !== 0) {
                console.log(movies);
                setMovies(() => movies);
            }
        });
    };

    let i = 0;

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img key={movie.toString() + i++}
                        className="row__poster row__posterLarge"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;