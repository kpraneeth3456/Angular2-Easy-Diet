import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './diet.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Weight Watchers Diet',
      ' Losing weight while living healthier',
      'http://horizongarciniacambogia.com/wp-content/uploads/2016/10/Weight-Loss-Recipes.png',
      [
        new Ingredient('Salted Chicken', 1),
        new Ingredient('Apple', 2),
        new Ingredient('Lettuce', 5),
        new Ingredient('Brown RIce', 2)
      ]),
    new Recipe('DASH Diet',
      'Preventing and lowering high blood pressure.',
      'http://wdy.h-cdn.co/assets/16/01/980x653/gallery-1451924342-egg-burrito.jpg',
      [
        new Ingredient('Low Fat Milk', 1),
        new Ingredient('whole-wheat bread', 1),
        new Ingredient('whole-wheat bread', 1),
        new Ingredient('unsalted chicken salad', 1),
        new Ingredient('Burrito', 1)
      ]),
    new Recipe('MIND Diet',
      'Preventing Alzheimer disease with brain healthy foods',
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/14/0/WU1103H_Fiesta-Tomato-Wedge-Salad_s4x3.jpg.rend.hgtvcom.616.462.jpeg',
      [
        new Ingredient('romaine lettuce', 1),
        new Ingredient('cucumber slices', 1),
        new Ingredient('low-calorie Italian dressing', 1),
        new Ingredient('Tomato Wedges', 1),
        new Ingredient('Red Wine', 1)
      ]),
    new Recipe('MEDITERRIAN Diet',
      'weight loss, heart, brain health and diabetes',
      'http://hhpblog.s3.amazonaws.com/blog/wordpress/wp-content/uploads/2015/09/mediterranean-diet-fish-oil-healthy-food.jpg',
      [
        new Ingredient('arugula', 1),
        new Ingredient('cucumber slices', 1),
        new Ingredient('vinaigrette dressing', 1),
        new Ingredient('baby spinach', 1),
      ]),
    new Recipe('FERTILITY Diet',
      'Boost ovulation and improve fertility.',
      'https://www.usnews.com/dims4/USNEWS/b572fb2/2147483647/resize/300x%3E/quality/85/?url=%2Fcmsmedia%2F91%2F97%2F9e1c9b484303896235c315ff1e46%2F151117-oatsflakes-stock.jpg',
      [
        new Ingredient('Oatmeal', 2),
        new Ingredient('Rice vinegar', 1),
        new Ingredient('Boiled Egg', 4),
        new Ingredient('wasabi', 3)
      ]),
    new Recipe('TLC Diet',
      'Cutting high cholesterol and Blood Pressure.',
      'https://www.usnews.com/dims4/USNEWS/93a188e/2147483647/resize/300x%3E/quality/85/?url=%2Fcmsmedia%2Fd5%2Fe3%2Fa7356ac640a789429a8e90cfb027%2F141226-grilledchickensalad-stock.jpg',
      [
        new Ingredient('Beef Sandwich', 1),
        new Ingredient('Honeydew Melon', 3),
        new Ingredient('Broccoli', 4),
        new Ingredient('Strawberries', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
