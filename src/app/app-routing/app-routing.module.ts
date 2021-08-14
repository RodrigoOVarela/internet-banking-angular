import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../component/content/content.component';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'register', component: CustomerRegistrationComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
