import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KierowcyListaComponent } from './components/kierowcy-lista/kierowcy-lista.component';
import { KierowcyLegendyComponent } from './components/kierowcy-legendy/kierowcy-legendy.component';
import { KierowcyTestowiComponent } from './components/kierowcy-testowi/kierowcy-testowi.component';

const routes: Routes = [
  { path: '', redirectTo: 'kierowcy', pathMatch: 'full' },
  { path: 'kierowcy', component: KierowcyListaComponent },
  { path: 'legendy', component: KierowcyLegendyComponent },
  { path: 'testowi', component: KierowcyTestowiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
