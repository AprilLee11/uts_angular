import { Component, Input } from '@angular/core';
import { Atom } from '../../search/model';

@Component({
  selector: 'concept-brief',
  templateUrl: './concept.brief.component.html',
  styles: ['div { margin-top: 1em; margin-right:1em; margin-bottom:1em; margin-left:1em; }']
})

export class ConceptBriefComponent {

    @Input() cui: string;
    @Input() semanticType: string;
  
    constructor () {

    }


    ngOnInit() {

    }

}
