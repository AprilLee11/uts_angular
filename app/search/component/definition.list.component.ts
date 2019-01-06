import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Definition } from '../../search/model';

@Component({
  selector: 'definition-list',
  templateUrl: './definition.list.component.html',
  styleUrls: ['./definition.list.component.css']
})

export class DefinitionListComponent implements OnChanges {

    @Input() definitions: Array<Definition>;
    private showAllDefinitions: boolean = false;

    constructor () {

    }

    ngOnInit() {
      console.log("DefinitionList ngOnInit\t" + this.definitions.length);
    }

    ngOnChanges(changes: SimpleChanges) {
      if(!!this.definitions) {
        console.log("ngOnChanges\t" + this.definitions);
      }
      /*
      console.log("DefinitionList ngOnChanges\t" + this.definitions.length);
      for(let propertyName in changes)  {
        let change = changes[propertyName];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        console.log(`${propertyName}: currentValue = ${current}, previousValue = ${previous}`);
      }
      */
    }

}
