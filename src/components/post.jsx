import React, { useState } from "react";
import { Dialog, Typography as Font, Input, Button } from "@material-ui/core";
import axios from "axios";
function Post() {
  const [recipe, setRecipe] = useState({
    chef_name: "",
    recipe_title: "",
    recipe_info: "",
    recipe_photo: "",
    meal_type: "",
    ingredients: "",
    instructions: "",
    user_id: ""
  });
  const [open, setOpen] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setRecipe({
      ...recipe,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendRecipe();
  };

  const sendRecipe = async () => {
    const res = await axios.post("/api/recipes", recipe);
    console.log(res);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} className="PostForm">
      <form onSubmit={handleSubmit}>
        <Font variant="h1">New Recipe</Font>
        <Input
          placeholder="Chef Name"
          onChange={handleChange}
          name="chef_name"
          required
          type="text"
          value={recipe.chef_name}
        />
        <Input
          placeholder="Title"
          onChange={handleChange}
          name="recipe_title"
          required
          type="text"
          value={recipe.recipe_title}
        />
        <Input
          placeholder="Info"
          onChange={handleChange}
          name="recipe_info"
          required
          type="text"
          value={recipe.recipe_info}
        />
        <Input
          placeholder="Course"
          onChange={handleChange}
          name="meal_type"
          required
          type="text"
          value={recipe.meal_type}
        />
        <Input
          placeholder="Ingredients"
          onChange={handleChange}
          name="ingredients"
          required
          type="text"
          value={recipe.ingredients}
        />
        <Input
          placeholder="Instructions"
          onChange={handleChange}
          name="instructions"
          required
          type="text"
          value={recipe.instructions}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Dialog>
  );
}

export default Post;
