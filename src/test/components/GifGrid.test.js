import React from 'react';
import {shallow} from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas con <GifGRid />', () => {
    
    const category = 'Naruto';

    test('debe de mostrar el componente correctamente', () => {
        //Tiene que ir antes de la definicion del wrapper
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        }) //Esta llamada es la de por defecto
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan los gifs', () => {
       
        const gifs = [{
            id: 'ABC',
            url: 'https://imagen.jpg',
            title: 'Mi titulo'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category} />)

        console.log(wrapper.find('div').length)
        expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('p').exists()).toBe(false);
       expect(wrapper.find('Gif').length).toBe(gifs.length);

    })
    
    
})
