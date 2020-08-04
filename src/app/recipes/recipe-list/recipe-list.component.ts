import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test de Recipe',
      'This simples teste',
      'https://get.pxhere.com/photo/ocean-restaurant-dish-meal-food-seafood-recipe-fish-cuisine-crab-shell-lemon-asian-food-platter-clams-prawns-oysters-brunch-thai-food-animal-source-foods-southeast-asian-food-shanghai-food-portuguese-food-1376447.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
