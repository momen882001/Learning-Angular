import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'This is a test recipe 1',
      'https://www.theseasonedmom.com/wp-content/uploads/2021/02/Taco-Skillet-4-360x361.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'This is a test recipe 2',
      'https://tastyrecipes01.com/wp-content/uploads/2019/10/22549605_1951771921761847_7869956105211687072_n-960x600.jpg'
    ),
    new Recipe(
      'A test recipe 3',
      'This is a test recipe 3',
      'https://i.pinimg.com/originals/5d/81/6d/5d816d64ec046d23620dfe0bfab4b911.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //get a copy from recipes array
  }
}
