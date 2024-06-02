import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent,
    }
];


function calc(a: number) {
    if (a > 0){
        return a
    }

    return String(a)
}