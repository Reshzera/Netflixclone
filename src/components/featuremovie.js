import React from 'react';
import './featuremovie.css';

export default ({item}) => {
    let firstdate = new Date(item.first_air_date);
    let geners = []
    for (let i in item.genres){
        geners.push(item.genres[i].name)
    }


    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstdate.getFullYear()    }</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href="" className="watch">► Assistir </a>
                        <a href="" className="mylist">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {geners.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}