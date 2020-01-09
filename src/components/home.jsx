import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Paper, Typography as Font, Button,} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Home = ({recipes,setRecipes}) => {
    const history = useHistory();
    useEffect(() => {
        fetchRecipe()
    }, [])
    const fetchRecipe = async () => {
        const res = await axios.get("/api/recipes")
        setRecipes(res.data);
    }

    const deleteRecipe = recipe => {
        axios.delete(`/api/recipes/${recipe.id}`)
            .then(fetchRecipe())
    }
    
    return (
        <div>
            {recipes.map(recipe =>
                <Paper elevation={5} key={recipe.id} className='homePage'>
                    <div className='homeContainer'>
                        {/* wrong url for photo */}
                        <img src={recipe.recipe_photo} />
                        <Font variant='h3'>
                            {recipe.recipe_title}
                            <span>
                                <Font variant='body1'>{recipe.chef_name}
                                </Font>
                            </span>

                        </Font>
                        <Font variant='h6'>
                            Recipe Info:
                        </Font>
                        <Font variant='body1' component='p'>
                            {recipe.recipe_info}
                        </Font>
                        <Font variant='h6'>
                            Instructions:
                        </Font>
                        <Font variant='body1' component='p'>
                            {recipe.instructions}
                        </Font>
                        <Font variant='h6'>
                            Ingredients:
                        </Font>
                        <Font variant='body1' component='p'>
                            {recipe.ingredients}
                        </Font>
                    </div>
                    <Button onClick={() => {
                        history.push(`/edit/${recipe.id}`)
                    }}>Edit Item</Button>
                    <Button onClick={() => {
                        deleteRecipe(recipe);
                    }}>Delete Recipe</Button>
                </Paper>)}
        </div>
    )
}

export default Home;