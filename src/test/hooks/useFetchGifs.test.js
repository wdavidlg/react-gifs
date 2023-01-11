import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'



describe('Pruebas en useFetchGifs', () => {
    
    
    test('debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('goku'))
        
        const {data, loading} = result.current;
        await waitForNextUpdate({timeout: 4000});

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('goku'))
        await waitForNextUpdate({timeout: 4000});

        const {data, loading} = result.current;
        
        expect(data.length).toBe(4)
        expect(loading).toBe(false)
    })
    
    
})
