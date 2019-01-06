import { TermDefaultSearchService } from './term.default.search.service';
import { AuthenticationService } from './authentication.service';
import { ConceptService } from './concept.service';

export * from './term.default.search.service';
export * from './authentication.service';
export * from './concept.service';

export const APP_SERVICES = [
    TermDefaultSearchService,
    ConceptService,
    AuthenticationService
];