import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { empty } from "rxjs/observable/empty";
import { Route, ActivatedRoute, Router } from "@angular/router";

import { AuthenticationService } from "../../core/services/authentication.service";
import { ConceptService } from "../../core/services/concept.service";
import {
  JSONBase,
  Atom,
  RootSource,
  AtomBase,
  Definition
} from "../../search/model";
import { ATOMS } from "../component/atoms";

@Component({
  selector: "concept-container",
  templateUrl: "./concept.container.component.html"
  //styles: ['div { width: 100%; margin-top: 1em; margin-right:1em; margin-bottom:1em; margin-left:1em; border-width:3px; }']
  //styleUrls: ['./term.default.search.container.css']
})
export class ConceptContainerComponent implements OnInit {
  tempAtomList: Array<any>;
  atomsList: Array<Atom> = [];
  definitionsList: Array<Definition> = [];
  semanticType: string = "Disease or Syndrome";
  cui: string;
  public loading = false;

  constructor(
    private authenticationService: AuthenticationService,
    private conceptService: ConceptService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cui = this.route.snapshot.params.ui;

    this.searchAtoms(this.cui);
    //this.searchDefinitions(this.cui);
  }

  searchAtoms(cui: string) {
    this.loading = true;
    this.atomsList = [];
    return this.conceptService
      .getAtomPageNum(cui)
      .subscribe((page_num: number) => {
        for (let i = 1; i <= page_num; i++) {
          this.conceptService.getAtoms(cui, i).subscribe((data: Object) => {
            let jsonBase: JSONBase = <JSONBase>data;
            let atomBase = <AtomBase>jsonBase;

            for (let j in atomBase.result) {
              let atom = <Atom>atomBase.result[j];
              this.atomsList = [...this.atomsList, atom];
            }
          });
        }
        this.loading = false;
      });
  }

  searchDefinitions(cui: string) {
    this.definitionsList = [];
    return this.conceptService
      .getDefinitions(cui, 1)
      .subscribe((data: Object) => {
        let definitionBase = <AtomBase>data;
        let definitions: Array<Definition> = [];
        for (let i in definitionBase.result) {
          let definition = <Definition>definitionBase.result[i];
          this.definitionsList.push(definition);
        }
      });
  }
}
