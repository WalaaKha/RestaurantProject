import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../category-data.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories =[];
  constructor(private categoryService: CategoryDataService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res =>this.categories = res )
  }

}
