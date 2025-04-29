import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key ='42c62e395bda007ca159a5eb1eb9e134'

const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key)

export default(
    getTrendingVideos
)