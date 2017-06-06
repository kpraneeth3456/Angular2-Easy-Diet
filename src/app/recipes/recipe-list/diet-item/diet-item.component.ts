import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../diet.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './diet-item.component.html',
  styleUrls: ['./diet-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }
}
