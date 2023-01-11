import React from 'react';
import {shallow} from 'enzyme'
import GifExpert from '../GifExpert'

describe('pruebas con <GifExpert />', () => {
    
    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpert/>)
        expect(wrapper).toMatchSnapshot();
    })

})
