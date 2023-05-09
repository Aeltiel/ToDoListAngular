import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NewListComponent } from './Pages/new-list/new-list.component';
import { ListeComponent } from './Pages/liste/liste.component';

const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'createListe', component : NewListComponent},
  {path : 'liste/:id', component : ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
