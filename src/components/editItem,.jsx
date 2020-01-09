import React, { useState, useEffect } from 'react';
import { Input, Button, Paper, Typography as Font } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

import axios from 'axios';


const EditItem = ({fetchRecipe}) => {
    const [recipe, setRecipe] = useState({
        recipe_title: '',
        recipe_info: '',
        ingredients: '',
        instructions: '',
    })
    console.log(recipe)
    useEffect(() => {
        axios.get(`/api/recipes/${id}`)
            // .then(res => console.log(res))
            .then(res => setRecipe(res.data))
    }, [])
    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const { id } = useParams();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`/api/recipes/${id}`, recipe)
        history.push('/')
    }
    
    return (
        <>
            <Paper elevation={5} className="FormLogin">
            <Font variant='h3' align='center'>Editing {recipe.recipe_title}</Font>
                <form onSubmit={handleSubmit}>
                    <Font variant='h4'>Title: </Font>
                    <Input
                        name="recipe_title"
                        value={recipe.recipe_title}
                        onChange={handleChange}
                        required
                    />
                    <Font variant='h4'>Recipe Info: </Font>
                    <Input
                        name="recipe_info"
                        value={recipe.recipe_info}
                        onChange={handleChange}
                        required
                    />
                    <Font variant='h4'>Instructions: </Font>
                    <Input
                        name="instructions"
                        value={recipe.instructions}
                        onChange={handleChange}
                        required
                    />
                    <Font variant='h4'>Ingredients: </Font>
                    <Input
                        name="ingredients"
                        value={recipe.ingredients}
                        onChange={handleChange}
                        required
                    />
                    <Button color="primary" variant="contained" type="submit">
                        Save Changes
                    </Button>
                </form>
            </Paper>
        </>
    )
}

export default EditItem;