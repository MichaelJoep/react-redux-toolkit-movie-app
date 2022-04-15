import axios from "axios";

export default axios.create({
    baseURL: "http://www.omdbapi.com",
})

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=52d0fd0a