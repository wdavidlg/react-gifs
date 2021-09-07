import React from 'react'
import Gif from './Gif'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    

    const {data:gifs, loading} = useFetchGifs(category);

    const getCardGifs = () => {
        return gifs.map((item) => <Gif key={item.id} gif={item} />);
    }
    console.log(loading, category);
    return (
        <div className='grid'>
            <h3 className='animate__animated animate__fadeInBottomRight'>{category}</h3>
            {loading && <p className='animate__animated animate__flash animate__delay-1s'>Cargando...</p>}
            <div className='category'>{getCardGifs()}</div>
        </div>
    )
}


