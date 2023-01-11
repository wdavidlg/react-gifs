import { shallow } from "enzyme"
import Gif from '../../components/Gif'
import React from 'react';


describe('pruebas en <Gif />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/imagen.jpg';
    let wrapper = shallow(<Gif gif={{url, title}}/>);
    
    beforeEach(() => {
        wrapper = shallow(<Gif gif={{url, title}}/>);
    });

    test('debe de mostrar correctamente el componente', () => {
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        console.log(title);
        expect( p.text() ).toBe(title);
    });

    test('debe de tener la imagen y el alt igual al url', () => {

        const img = wrapper.find('img');
        const {src} = img.props();
        console.log(src);
        expect( src ).toBe(url);
    });

    test('debe de tener la clase animate_bounce', () => {
        
        const div = wrapper.find('div');
        const {className} = div.props();
        expect( className.includes('animate__bounce')).toBe(true);
    });
})
