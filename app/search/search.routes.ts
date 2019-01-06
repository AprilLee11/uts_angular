import { SearchShellComponent } from './search.shell.component';
import { TermSearchComponent } from './component/term.search.component';
import { ConceptContainerComponent } from './container/concept.container.component';

export const SearchRoutes = [
    {
        path: '',
        component: SearchShellComponent,
        children: [
            { 
                path: 'term/:query', 
                component: TermSearchComponent
            },
            {
                path: 'term/:query/cui/:ui',
                component: ConceptContainerComponent
            }
        ]
    }
]
