import React, { useState, useParams } from 'react';
import axios from 'axios';


const UpdateMovie = (props) => {
    const initialMovie = {
        title: '',
        director: '',
        metascore: 0,
        stars: []
    }
    const [ editingMovie, setEditingMovie ] = useState(initialMovie)
    const id = useParams()

    useEffect(() => {
        const movieToUpdate = props.movies.find(thing => `${thing.id}` === id);

        if (movieToUpdate) {
          setItem(movieToUpdate);
        }
    },[props.movies, id])
    
    const SubmitNewMovie = e => {
        e.preventDefault();
        axios
            .put("/api/movies/:id")
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log(err))
    }
    const changeHandler = e => {
        e.preventDefault();
        setEditingMovie()
    }

    return (
        <div>
            <form onSubmit={SubmitNewMovie}>
                <input
                    type='text'
                    name='title'
                    placeholder='title'
                    onChange={changeHandler}
                />
                <input
                    type='text'
                    name='director'
                    placeholder='director'
                    onChange={changeHandler}
                />
                <input
                    type='text'
                    name='metascore'
                    placeholder='metascore'
                    onChange={changeHandler}
                />
                <input
                    type='text'
                    name='stars'
                    placeholder='stars'
                    onChange={changeHandler}
                />
            </form>
        </div>
    )
}

export default UpdateMovie;