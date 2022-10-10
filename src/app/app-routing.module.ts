import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormReactiveComponent } from './my-form-reactive/my-form-reactive.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [
 {path : 'Reactive', component: MyFormReactiveComponent},
 {path : 'Template', component: MyFormComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
