import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Notebook', url: '/notebook', icon: 'book' },
    { title: 'Exercises', url: '/exercises', icon: 'barbell' },
  ];
  public labels = [];

  constructor() { }

  ngOnInit() {
  }

}
