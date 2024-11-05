import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [

    {
         path: "", redirectTo: "listarPoke",pathMatch:'full'
    },
    {
        path:"listarPoke",component:ListComponent,
    },
    {
        path:"Detalles",component:DetailsComponent,
    },
    {
        path:"home",component:HomeComponent,
    }
];
