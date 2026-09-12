import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { HomeComponent } from './home/home/home';

export default [
    { path: 'documentation', component: HomeComponent },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    {path: 'anji', component:HomeComponent},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
