import { Component, Output, EventEmitter } from '@angular/core';
import { DefaultSearchParam } from '../model/index';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search.bar.component.html',
  styleUrls: ['./search.bar.component.css']
})

export class SearchBarComponent {

    private isAuthenticated: boolean = false;

    private menuList = [
        { "id": 1, "name": "Search" },
        { "id": 2, "name": "Tree" } 
    ];
    public defaultSearchParam: DefaultSearchParam;

  constructor (private router: Router) {
    this.defaultSearchParam = {
        searchTerm: 'liver injury'
    }
  }

  ngOnInit() {
    this.isAuthenticated = true;
  }

  onSearch(term: string) {
    //this.router.navigate(['/term'], { queryParams: { query: term }});
    this.router.navigateByUrl('/term/' + term);
  }
}
