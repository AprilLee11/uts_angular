import { Component } from '@angular/core';

@Component({
  selector: 'uts-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  isAuthenticated: boolean = false;

  menuList = [
    { "id": 1, "name": "Search" },
    { "id": 2, "name": "Tree" } 
  ];

  constructor () {
        
  }

  ngOnInit() {
    this.isAuthenticated = true;
  }
}
