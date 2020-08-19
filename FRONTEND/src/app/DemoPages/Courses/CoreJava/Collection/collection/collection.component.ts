import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass']
})
export class CollectionComponent implements OnInit {

  constructor() { }
  heading = 'Java Collections Framework in Depth with Examples for Beginners';
  subheading = 'Author: Sunil Kumar';
  icon = 'pe-7s-diamond icon-gradient bg-happy-fisher';
  openBrace = '{';
  closeBrace = '}';
  openTag = '<';
  closeTag = '>';
  ngOnInit() {
  }

}
