import { Component, Inject } from '@angular/core';
import { KierowcaServiceInterface } from '../../interfaces/kierowca-service.interface';
import { KierowcyTestowiService } from '../../services/kierowcy-testowi.service';
import { LicznikWidocznosciFormularzaService } from '../../services/licznik-widocznosci-formularza.service';
import { KIEROWCA_SERVICE } from '../../tokens/kierowca-service.token';
import { KierowcyListaBase } from '../kierowcy-lista/kierowcy-lista-base';

@Component({
  selector: 'app-kierowcy-testowi',
  standalone: false,
  templateUrl: '../kierowcy-lista/kierowcy-lista.component.html',
  styleUrl: '../kierowcy-lista/kierowcy-lista.component.css',
  providers: [
    LicznikWidocznosciFormularzaService,
    { provide: KIEROWCA_SERVICE, useExisting: KierowcyTestowiService }
  ]
})
export class KierowcyTestowiComponent extends KierowcyListaBase {
  override tytul = 'Kierowcy testowi';

  constructor(
    @Inject(KIEROWCA_SERVICE) kierowcyService: KierowcaServiceInterface,
    licznikWidocznosciFormularzaService: LicznikWidocznosciFormularzaService
  ) {
    super(kierowcyService, licznikWidocznosciFormularzaService);
  }
}
