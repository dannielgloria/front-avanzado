import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";

describe('Form Component Test', () => {

    beforeAll(()=>{
        window.alert = jest.fn()
    });

    afterEach(()=>{
        jest.clearAllMocks();
    })

    test('Renderiza correctamente los campos del formulario', ()=>{
        render(<Form />);

        expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/fecha/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/país/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/edad/i)).toBeInTheDocument();

    });

    test('Muestra alerta si el correo no es valido', async () => { 
        render(<Form />);

        await userEvent.type(screen.getByLabelText(/correo/i), 'aewfwaedfvwe');
        fireEvent.click(screen.getByRole('button',{ name: /enviar/i }))

        expect( window.alert).toHaveBeenCalledWith('Por favor ingresa un correo válido.');
    });
    
})
