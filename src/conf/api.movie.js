import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
        req.headers['Authorization'] ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTZmNDk5ZjIyOTgzODVmYjg4NzBmNTkyYWM1NDc5YyIsInN1YiI6IjVkY2MzZmI4Yjc2Y2JiMDAxMzcyNTkyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hy8DkqrU3AoUIyzGfdybNN1BpNxDJ9kn5cKI-5gBWpM'
        return req;
})



export default apiMovie;