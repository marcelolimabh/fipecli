import {RouterModule, Routes } from '@angular/router';
import {FipeComponent} from './fipe/fipe.component';



const appRoutes: Routes = [
    {path:'', component: FipeComponent},
    {path:'fipecli', component: FipeComponent},
    {path:'**', component: FipeComponent }
] 


export const routing = RouterModule.forRoot(appRoutes);
