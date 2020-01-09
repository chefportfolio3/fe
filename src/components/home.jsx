import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Paper, Typography as Font } from '@material-ui/core';

const Home = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('/api/recipes')
            .then(res => setRecipes(res.data))

    }, [])

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
                </Paper>)}
        </div>
    )
}

export default Home;