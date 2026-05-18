import { Injectable } from '@angular/core';
import { KierowcaServiceInterface } from '../interfaces/kierowca-service.interface';
import { Kierowca } from '../models/kierowca.model';
import { DatyOperacjiService } from './daty-operacji.service';

@Injectable({
  providedIn: 'root'
})
export class KierowcyLegendyService implements KierowcaServiceInterface {
  private kierowcy: Kierowca[] = [
    {
      id: 1,
      numerKierowcy: 7,
      dataUrodzenia: new Date('1979-10-17'),
      imie: 'Kimi',
      nazwisko: 'Raikkonen'
    },
    {
      id: 2,
      numerKierowcy: 5,
      dataUrodzenia: new Date('1987-07-03'),
      imie: 'Sebastian',
      nazwisko: 'Vettel'
    },
    {
      id: 3,
      numerKierowcy: 14,
      dataUrodzenia: new Date('1981-07-29'),
      imie: 'Fernando',
      nazwisko: 'Alonso'
    },
    {
      id: 4,
      numerKierowcy: 22,
      dataUrodzenia: new Date('1980-01-19'),
      imie: 'Jenson',
      nazwisko: 'Button'
    },
    {
      id: 5,
      numerKierowcy: 9,
      dataUrodzenia: new Date('1975-06-27'),
      imie: 'Juan',
      nazwisko: 'Montoya'
    }
  ];

  constructor(private readonly datyOperacjiService: DatyOperacjiService) {}

  pobierzListe(): Kierowca[] {
    this.datyOperacjiService.aktualizujDatePobraniaListy();
    return [...this.kierowcy];
  }

  usun(id: number): void {
    this.kierowcy = this.kierowcy.filter(kierowca => kierowca.id !== id);
  }

  dodaj(kierowca: Kierowca): void {
    this.kierowcy.push(kierowca);
    this.datyOperacjiService.aktualizujDateDodania();
  }
}
