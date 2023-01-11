import {getGifs} from '../../helpers/getGifs'

describe('pruebas con getGifs', () => {
    
    test('debe de traer 4 elementos', async () => {
        
        const gifs = await getGifs('Goku');
        const tam = gifs.length;
        expect( tam ).toBe(4);
    })

    test('debe de retornar 0 con una categoria vacia', async () => {
        
        const gifs = await getGifs('');
        const tam = gifs.length;
        expect( tam ).toBe(0);
    })
    
})
