import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthenticationService } from '../../core/services/authentication.service';
import { TermDefaultSearchService } from '../../core/services/term.default.search.service';
import { JSONBase, ConceptBit, ConceptsBase, RootSource, AtomBase, Definition } from '../../search/model';

@Component({
    selector: 'term-search',
    templateUrl: './term.search.component.html',
    styleUrls: ['./term.search.component.css']
})

export class TermSearchComponent implements OnInit {

    conceptsList: Array<ConceptBit>;
    query: string;
    sum: number = 25;
    throttle: number = 300;
    scrollDistance: number = 1;
    scrollUpDistance: number = 1;
    direction: string = '';
    currentPage: number = 1;
    conceptEnd: boolean = false;

    constructor(
        private authenticationService: AuthenticationService,
        private termDefaultSearchService: TermDefaultSearchService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.authenticationService.authenticate('testuser', 'test123!@#')
        .subscribe(response => {
            if(response!=null) {
                this.authenticationService.setLoggedIn(true);
                this.route.paramMap.subscribe( params => {
                    this.query = params.get("query");
                    this.initConceptList();
                    this.searchConcepts(this.query, this.currentPage);
                } )
            }
            else {
                this.authenticationService.setLoggedIn(false);
                console.log("not authenticated");
            }
        })  
    }

    onScrollDown (ev) {
        if(!this.conceptEnd) {
            this.currentPage += 1;
            this.searchConcepts(this.query, this.currentPage);
        }
    }

    appendItems(startIndex, endIndex) {
        this.conceptsList = this.conceptsList.concat(this.conceptsList);
    }

    initConceptList(): void {
        this.conceptsList = [];
        this.currentPage = 1;
        this.conceptEnd = false;
    }

    searchConcepts (query: string, pageNum: number)  {
        this.termDefaultSearchService.getConcepts(query, pageNum).subscribe(
            (data: object) => {
                let jsonBase: JSONBase = <JSONBase>data;
                let conceptBase = <ConceptsBase>jsonBase.result;
                
                if(((<ConceptBit>conceptBase.results[0]).name==='NO RESULTS')) {
                    this.conceptEnd = true;
                }
                else {
                    for(let i in conceptBase.results) {
                        let conceptBit = <ConceptBit>conceptBase.results[i];
                        this.conceptsList.push(conceptBit);
                    }
                }
            }
        );
    }
}
  