import { Injectable } from '@angular/core';
import { KierowcaServiceInterface } from '../interfaces/kierowca-service.interface';
import { Kierowca } from '../models/kierowca.model';
import { DatyOperacjiService } from './daty-operacji.service';

@Injectable({
  providedIn: 'root'
})
export class KierowcyTestowiService implements KierowcaServiceInterface {
  private kierowcy: Kierowca[] = [
    {
      id: 1,
      numerKierowcy: 11,
      dataUrodzenia: new Date('1994-05-12'),
      imie: 'Adam',
      nazwisko: 'Kowalski'
    },
    {
      id: 2,
      numerKierowcy: 24,
      dataUrodzenia: new Date('1998-09-03'),
      imie: 'Marek',
      nazwisko: 'Nowak'
    },
    {
      id: 3,
      numerKierowcy: 31,
      dataUrodzenia: new Date('2001-02-21'),
      imie: 'Piotr',
      nazwisko: 'Zielinski'
    },
    {
      id: 4,
      numerKierowcy: 48,
      dataUrodzenia: new Date('1996-11-18'),
      imie: 'Tomasz',
      nazwisko: 'Wisniewski'
    },
    {
      id: 5,
      numerKierowcy: 77,
      dataUrodzenia: new Date('2000-06-07'),
      imie: 'Karol',
      nazwisko: 'Lewandowski'
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
