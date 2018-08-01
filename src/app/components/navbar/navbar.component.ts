import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand: string = "PostsApp";
  myName: string = "Андрій";
  mySurname: string = "Король";

  constructor() { }

  ngOnInit() {
  }

}
