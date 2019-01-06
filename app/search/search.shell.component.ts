import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "search-shell",
  template: `
    <search-bar></search-bar>
    <router-outlet></router-outlet>
  `,
  styles: ["div { margin-bottom:50px; }"]
})
export class SearchShellComponent {}
