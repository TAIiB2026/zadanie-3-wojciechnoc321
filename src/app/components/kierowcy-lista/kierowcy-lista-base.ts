import { Directive, OnInit } from '@angular/core';
import { KierowcaServiceInterface } from '../../interfaces/kierowca-service.interface';
import { Kierowca } from '../../models/kierowca.model';
import { LicznikWidocznosciFormularzaService } from '../../services/licznik-widocznosci-formularza.service';

type NowyKierowca = Omit<Kierowca, 'id'>;

@Directive()
export abstract class KierowcyListaBase implements OnInit {
  tytul = 'Kierowcy';
  kierowcy: Kierowca[] = [];
  czyPokazacFormularz = false;
  liczbaZmianWidocznosciFormularza = 0;

  protected constructor(
    private readonly kierowcyService: KierowcaServiceInterface,
    private readonly licznikWidocznosciFormularzaService: LicznikWidocznosciFormularzaService
  ) {}

  ngOnInit(): void {
    this.odswiezListe();
  }

  usunKierowce(id: number): void {
    this.kierowcyService.usun(id);
    this.odswiezListe();
  }

  przelaczFormularz(): void {
    this.czyPokazacFormularz = !this.czyPokazacFormularz;
    this.zliczZmianeWidocznosciFormularza();
  }

  dodajKierowce(kierowca: NowyKierowca): void {
    const nowyKierowca: Kierowca = {
      id: this.wygenerujId(),
      ...kierowca
    };

    this.kierowcyService.dodaj(nowyKierowca);
    this.odswiezListe();
    this.ukryjFormularzPoDodaniu();
  }

  private odswiezListe(): void {
    this.kierowcy = this.kierowcyService.pobierzListe();
  }

  private wygenerujId(): number {
    if (this.kierowcy.length === 0) {
      return 1;
    }

    return Math.max(...this.kierowcy.map(kierowca => kierowca.id)) + 1;
  }

  private ukryjFormularzPoDodaniu(): void {
    if (this.czyPokazacFormularz) {
      this.czyPokazacFormularz = false;
      this.zliczZmianeWidocznosciFormularza();
    }
  }

  private zliczZmianeWidocznosciFormularza(): void {
    this.liczbaZmianWidocznosciFormularza =
      this.licznikWidocznosciFormularzaService.zliczZmiane();
  }
}
