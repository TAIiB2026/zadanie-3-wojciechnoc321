import { Injectable } from '@angular/core';
import { KierowcaServiceInterface } from '../interfaces/kierowca-service.interface';
import { Kierowca } from '../models/kierowca.model';
import { DatyOperacjiService } from './daty-operacji.service';

@Injectable({
  providedIn: 'root'
})
export class KierowcyService implements KierowcaServiceInterface {
  private kierowcy: Kierowca[] = [
    {
      id: 1,
      numerKierowcy: 44,
      dataUrodzenia: new Date('1985-01-07'),
      imie: 'Lewis',
      nazwisko: 'Hamilton'
    },
    {
      id: 2,
      numerKierowcy: 1,
      dataUrodzenia: new Date('1997-09-30'),
      imie: 'Max',
      nazwisko: 'Verstappen'
    },
    {
      id: 3,
      numerKierowcy: 16,
      dataUrodzenia: new Date('1997-10-16'),
      imie: 'Charles',
      nazwisko: 'Leclerc'
    },
    {
      id: 4,
      numerKierowcy: 4,
      dataUrodzenia: new Date('1999-11-13'),
      imie: 'Lando',
      nazwisko: 'Norris'
    },
    {
      id: 5,
      numerKierowcy: 63,
      dataUrodzenia: new Date('1998-02-15'),
      imie: 'George',
      nazwisko: 'Russell'
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
