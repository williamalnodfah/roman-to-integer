import { RumanNumeralsComponent } from './components/ruman-numerals/ruman-numerals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'rumman-numerals', component: RumanNumeralsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
