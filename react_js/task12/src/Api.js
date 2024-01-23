import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.potterdb.com'
});

class Api {
    static getMovies = (value) => {
        return api.get('/v1/movies', {
            params: {
                filter: {
                    title_cont_any: value
                }
            }
        })
    }

    static getMovie = (id) => {
        return api.get(`/v1/movies/${id}`)
    }
}

export default Api;