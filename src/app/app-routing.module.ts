import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { PageSendComponent } from './page-send/page-send.component';

const routes: Routes = [
  { path: '', component: PageListComponent, },
  { path: 'send', component: PageSendComponent, }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
