import { Routes } from '@angular/router';
import { ErrorComponent } from './layout/error/error.component';

export const routes: Routes = [
	{
        path:'search',
        loadChildren:'./search/index#SearchModule'
	},
	{
		path: '', redirectTo: '/search', pathMatch: 'full'
	},
    { 
        path:'**',
        component: ErrorComponent
    },    
]