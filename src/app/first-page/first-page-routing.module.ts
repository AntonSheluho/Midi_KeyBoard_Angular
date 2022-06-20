import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { PageComponent } from './page/page.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'entrance', component: EntranceComponent, outlet: 'log'},
  // { path: '',   redirectTo: 'page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
