import { renderHook, act } from "@testing-library/react";
import useForm from "../hooks/useForm";

describe('useForm Hook', ()=>{
    const initialValues = {
        name:    '', 
        email:   '', 
        date:    '', 
        country: '', 
        age:     '',
    };

    test('Esta prueba debe de inicializar con los valores proporcionados', () =>{
        const { result } = renderHook(() => useForm(initialValues));
        const [values] = result.current;

        expect(values).toEqual(initialValues)
        }
    );
    
    test('Debe de actualizar los valores al llamar a la funcion handleChange', () =>{
        const { result } = renderHook(() => useForm(initialValues));
        const [, handleChange] = result.current;

        act(()=>{
            handleChange({ target: { name: 'name', value: 'Fulano' }})
        });

        const [values] = result.current;
        expect(values.name).toBe('Fulano');
    })

    test('Debe de resetear los valores al estado inicial', ()=>{
        const { result } = renderHook(() => useForm(initialValues));
        const [, handleChange, resetForm] = result.current;

        act(()=>{
            handleChange({ target: { name: 'name', value: 'Fulano' }})
        });

    
        expect(result.current[0].name).toBe('Fulano');

        act(()=>{
            resetForm();
        })

        
        expect(result.current[0]).toEqual(initialValues);
    })
}

)