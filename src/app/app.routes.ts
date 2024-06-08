import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: TodosComponent},
    {path: "about-page", component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];
