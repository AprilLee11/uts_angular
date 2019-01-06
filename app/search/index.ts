import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';

import { LoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SearchRoutes as routes } from './search.routes';
import { SearchBarComponent } from './component/search.bar.component';
import { TermSearchComponent } from './component/term.search.component';
import { SearchShellComponent } from './search.shell.component';
import { ConceptContainerComponent } from './container/concept.container.component';
import { AtomListComponent } from './component/atom.list.component';
import { ConceptBriefComponent } from './component/concept.brief.component';
import { DefinitionListComponent } from './component/definition.list.component';

@NgModule({
    declarations: [
        SearchShellComponent,
        SearchBarComponent,
        TermSearchComponent,
        ConceptContainerComponent,
        AtomListComponent,
        ConceptBriefComponent,
        DefinitionListComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule,
        InfiniteScrollModule,
        RouterModule.forChild(routes)
    ]
  })
  export class SearchModule {}