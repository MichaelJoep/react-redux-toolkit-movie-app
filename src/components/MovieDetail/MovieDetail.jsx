import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAsyncMovieOrShowDetail, 
    getSelectedMovieOrShow, 
    removeSelectedMovieOrShow} from '../../features/movies/movieSlice';
import "./MovieDetail.scss";

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));

        return () => {
            dispatch(removeSelectedMovieOrShow())
        };
    }, [dispatch, imdbID])
    return (
        <div className='movie-section'>
            {Object.keys(data).length === 0 ? (
            <div><h1>...Loading</h1></div>
             ) : (
            <>
             <div className="section-left">
                <div className="movie-title">
                    {data.Title}
                    </div>
                    <div className="movie-rating">
                        <span>
                            IMDB Rating <i className="fas fa-star"></i> : {data.imdbRating}
                        </span>
                        <span>
                            IMDB Votes <i className="fas fa-thumbs-up"></i> : {data.imdbVotes}
                        </span>
                        <span>
                           Runtime <i className="fas fa-file"></i> : {data.Runtime}
                        </span>
                        <span>
                            Year <i className="fas fa-calendar"></i> : {data.Year}
                        </span>
                    </div>
                    <div className="movie-plot">{data.Plot}</div>
                    <div className="movie-info">
                        <div>
                            <span>Director</span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Stars</span>
                            <span>{data.Actors}</span>
                        </div>
                        <div>
                            <span>Generes</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Languages</span>
                            <span>{data.language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                        <div>
                            <span>Released</span>
                            <span>{data.Released}</span>
                        </div>
                    </div>
               </div> 
             <div className="section-right">
               <img src={data.Poster} alt={data.Title}/>
            </div>
          </>  
         )}       
        </div>
    )
}

export default MovieDetail
