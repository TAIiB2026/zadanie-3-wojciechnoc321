import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KierowcaFormularzComponent } from './components/kierowca-formularz/kierowca-formularz.component';
import { KierowcyLegendyComponent } from './components/kierowcy-legendy/kierowcy-legendy.component';
import { KierowcyListaComponent } from './components/kierowcy-lista/kierowcy-lista.component';
import { KierowcyTestowiComponent } from './components/kierowcy-testowi/kierowcy-testowi.component';

@NgModule({
  declarations: [
    AppComponent,
    KierowcaFormularzComponent,
    KierowcyLegendyComponent,
    KierowcyListaComponent,
    KierowcyTestowiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
