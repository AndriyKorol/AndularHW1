import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [
    {
      name: 'Salmon - Canned',
      price: '$91.56',
      info: 'Some text of Salmon - Canned',
      review: [
        {
          name: 'Denis',
          text: 'Some review text'
        }
      ]
    },
    {
      name: 'Soup - Beef, Base Mix',
      price: '$126.14',
      info: 'Some text of Soup - Beef',
      review: [
        {
          name: 'Ivan',
          text: 'Some review text'
        },
        {
          name: 'Maks',
          text: 'Some review text'
        }
      ]
    }
    ];

  constructor() { }

  ngOnInit() {
  }

  toggleReviews(item){
    item.reviewShow = !item.reviewShow;
  }

  deleteItem(item){
    this.items.splice(item, 1);
  }

}
































