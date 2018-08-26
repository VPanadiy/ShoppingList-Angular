import {EventEmitter, Injectable} from '@angular/core';

import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A test recipe',
      'This is a test',
      '../../../assets/images/recipe.bmp',
      [new IngredientModel('Test 1', 1)]),
    new RecipeModel(
      'Another test recipe',
      'This is another test',
      '../../../assets/images/recipe.bmp',
      [new IngredientModel('Test 2', 2)])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredientsElement(ingredients);
  }
}
