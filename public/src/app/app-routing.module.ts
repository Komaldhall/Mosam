import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'burbank' },
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'seattle',component: SeattleComponent },
  { path: 'washington',component: WashingtonComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'sanjose',component: SanjoseComponent },
  { path: 'search', component:SearchComponent},
  
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
