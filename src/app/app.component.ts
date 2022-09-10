import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Notebook', url: '/notebook', icon: 'book' },
    { title: 'Exercises', url: '/exercises', icon: 'barbell' },
  ];
  public labels = [];
  constructor() {}
}
