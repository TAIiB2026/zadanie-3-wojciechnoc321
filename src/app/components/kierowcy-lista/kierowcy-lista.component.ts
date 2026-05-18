import { Component, Inject } from '@angular/core';
import { KierowcaServiceInterface } from '../../interfaces/kierowca-service.interface';
import { KierowcyService } from '../../services/kierowcy.service';
import { LicznikWidocznosciFormularzaService } from '../../services/licznik-widocznosci-formularza.service';
import { KIEROWCA_SERVICE } from '../../tokens/kierowca-service.token';
import { KierowcyListaBase } from './kierowcy-lista-base';

@Component({
  selector: 'app-kierowcy-lista',
  standalone: false,
  templateUrl: './kierowcy-lista.component.html',
  styleUrl: './kierowcy-lista.component.css',
  providers: [
    LicznikWidocznosciFormularzaService,
    { provide: KIEROWCA_SERVICE, useExisting: KierowcyService }
  ]
})
export class KierowcyListaComponent extends KierowcyListaBase {
  constructor(
    @Inject(KIEROWCA_SERVICE) kierowcyService: KierowcaServiceInterface,
    licznikWidocznosciFormularzaService: LicznikWidocznosciFormularzaService
  ) {
    super(kierowcyService, licznikWidocznosciFormularzaService);
  }
}
