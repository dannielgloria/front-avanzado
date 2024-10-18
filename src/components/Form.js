import React from "react";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import useForm from "../hooks/useForm"

const Form = () =>{
    const [formData, handleChange, resetForm] = useForm({ name: '', email: '', date:'', country:'', age:''});

    const handleSubmint = (e) =>{
        e.preventDefault();
        console.log(formData);
        resetForm();
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Formulario en REACT Avanzado
            </Typography>
            <form onSubmit={handleSubmint}>
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12}>
                        <TextField 
                            label="Nombre"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField 
                            label="Correo"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField 
                            label="Fecha"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField 
                            label="Pais"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField 
                            label="Edad"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2}}
                        />
                    </Grid2>
                    
                </Grid2>
            </form>
        </Box>
    );
};

export default Form;