const API_KEY = "563c2157c017dfdc9b1a81e289ff1d6b";
const API_PATH = "https://api.themoviedb.org/3";



const  basicfetch =  async (endpoint) => {
    const req = await fetch(`${API_PATH}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getHomelist: async () =>{
        return[
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados Para Você',
                items: await basicfetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicfetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicfetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicfetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicfetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicfetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicfetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieinfo: async (movieId, type) => {
        let info = {}

        if (movieId){
            switch(type){
                case 'movie':
                    info = await basicfetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break; 

                case 'tv':
                    info = await basicfetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null;
                break;
            }
        }

        return info
    }
}