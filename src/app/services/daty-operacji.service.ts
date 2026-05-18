import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatyOperacjiService {
  private ostatniePobranieListySubject = new BehaviorSubject<Date | null>(null);
  private ostatnieDodanieSubject = new BehaviorSubject<Date | null>(null);

  ostatniePobranieListy$: Observable<Date | null> = this.ostatniePobranieListySubject.asObservable();
  ostatnieDodanie$: Observable<Date | null> = this.ostatnieDodanieSubject.asObservable();

  aktualizujDatePobraniaListy(): void {
    this.ostatniePobranieListySubject.next(new Date());
  }

  aktualizujDateDodania(): void {
    this.ostatnieDodanieSubject.next(new Date());
  }
}
