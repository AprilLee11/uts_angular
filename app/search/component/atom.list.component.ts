import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Atom } from '../../search/model';

import { ATOMS } from './atoms';

@Component({
  selector: 'atom-list',
  templateUrl: './atom.list.component.html',
  styleUrls: ['./atom.list.component.css']
})

export class AtomListComponent implements OnInit, OnChanges {
  private tempAtoms: Array<any>;
    private filteredAtoms: Array<Atom>;
    private _atoms: Array<Atom>;
    private _listFilter: string;
    private _allLanguages: boolean;
    private _allContents: boolean;

    @Input() atoms: Array<Atom>;
    
    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['atoms']) {
        this.filteredAtoms = this.atoms.filter(
          //(atom: Atom) => atom.name.toLocaleLowerCase().indexOf(filterBy)!== -1
          (atom: Atom) => (atom.language==='ENG'&& atom.suppressible!==true && atom.obsolete!==true)
        );
      }
    }

    get allLanguages(): boolean {
      return this._allLanguages;
    }

    set allLanguages(value: boolean) {
      this._allLanguages = value;
    }

    get allContents(): boolean {
      return this._allContents;
    }

    set allContents(value: boolean) {
      this._allContents = value;
    }

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredAtoms = this.listFilter ? this.performFilter(this.listFilter): this.atoms;
    }
    
    performFilter(filterBy: string): Array<Atom> {
      filterBy = filterBy.toLocaleLowerCase();
      return this.atoms.filter((atom: Atom) =>
        atom.name.toLocaleLowerCase().indexOf(filterBy)!== -1);
    }

    toggleAllContents() {
      console.log("_allContents\t" + this._allContents);
    }
}
