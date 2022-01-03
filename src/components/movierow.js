import React, { useState } from 'react';
import './movierow.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default ({title, items}) => {
    const [scrollx, setscrollx] =  useState(0)
    const handleleftarrow = () => {
        let x = scrollx + Math.round(window.innerWidth/2);
        if (x>0){
            x=0
        }
        setscrollx(x)
    }
    
    const handlerigtharrow = () => {
        let x = scrollx - Math.round(window.innerWidth/2);
        let listw = items.results.length * 160
        if (window.innerWidth - listw > x){
            x = (window.innerWidth - listw) - 60
        }
        setscrollx(x)
    }
    return(
        <div className="movierow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleleftarrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--Rigth" onClick={handlerigtharrow}>
                <NavigateNextIcon style={{fontSize:50}}/>
            </div>
            <div className = "movieRow--listarea">
                <div className = "movierow--movie" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 160,
                    }}>
                    {items.results.length > 0 && items.results.map((item,key)=>(
                        <div className = "movierow--item" key={key}>
                            <a href="/">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}alt={item.original_title}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}