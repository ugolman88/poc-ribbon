import { FornitureComponent } from './forniture/forniture.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fatture', component: FattureComponent },
  { path: 'forniture', component: FornitureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],

  exports: [RouterModule],
})
export class AppRoutingModule {}
