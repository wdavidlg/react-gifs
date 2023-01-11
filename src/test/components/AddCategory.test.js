import {AddCategory} from '../../components/AddCategory'
import React from 'react';
import {shallow} from 'enzyme'


describe('pruebas con AddCategory', () => {

    // Se guarda la referencia del metodo setCategories
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory 
        setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory 
        setCategories={setCategories}/>);
    })

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper).toMatchSnapshot();
    })

    test('debe cambiar el valor del input', () => {
        wrapper.find('input').simulate('change', {target: {value: 'mundo'}});
        const valor = wrapper.find('input').prop('value');
        console.log(valor);
        expect(valor).toBe('mundo');
    })
    
    
   test('No debe postear la informacion con submit', () => {
       // preventDefault: () =>{}
       wrapper.find('form').simulate('submit', { preventDefault(){}});
       expect( setCategories ).not.toHaveBeenCalled();

   })
   
   test('deben de llamar el setCategories y limpiar la caja de texto', () => {
       const value = 'hola';
       //Simular el change en el input
       wrapper.find('input').simulate('change', {target:{value}})
       //Simular el submit
       wrapper.find('form').simulate('submit', {preventDefault(){}})
       //setCategories se debe haber llamado
       //similar: toHaveBeenCalledTimes(1)
       expect( setCategories ).toHaveBeenCalled();
       //el value del input debe estar vacío
       expect( wrapper.find('input').prop('value')).toBe('') 
       
   })
   
    
    
})

