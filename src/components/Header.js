import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className = {black ? 'black' : ''}>
            <div className = "logo">
                <a href="/"><img  src="https://fontmeme.com/permalink/210903/081521d52867dc16877fcba89fb738fc.png"/></a>
            </div>
            <div className = "perfil">
                <a href="/"><img src="https://t.ctcdn.com.br/vvAWVFlVVp6xV4660JzXPkIpxO4=/400x400/smart/i490769.jpeg "/></a>
            </div>
        </header>
    )
}