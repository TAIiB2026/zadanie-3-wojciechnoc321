import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusLicznikaFormularzaService {
  private liczbaZmianWidocznosciFormularzaSubject = new BehaviorSubject<number>(0);

  liczbaZmianWidocznosciFormularza$: Observable<number> =
    this.liczbaZmianWidocznosciFormularzaSubject.asObservable();

  ustawLiczbeZmian(liczbaZmian: number): void {
    this.liczbaZmianWidocznosciFormularzaSubject.next(liczbaZmian);
  }
}
