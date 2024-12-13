import React from 'react';

function Card({data}) {
    return (
        <div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.detail}</p>
            </div>
        </div>
    );
}

export default Card;