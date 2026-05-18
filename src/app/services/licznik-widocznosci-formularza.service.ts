import { Injectable } from '@angular/core';
import { StatusLicznikaFormularzaService } from './status-licznika-formularza.service';

@Injectable()
export class LicznikWidocznosciFormularzaService {
  private liczbaZmian = 0;

  constructor(private readonly statusLicznikaFormularzaService: StatusLicznikaFormularzaService) {
    this.statusLicznikaFormularzaService.ustawLiczbeZmian(this.liczbaZmian);
  }

  pobierzLiczbeZmian(): number {
    return this.liczbaZmian;
  }

  zliczZmiane(): number {
    this.liczbaZmian++;
    this.statusLicznikaFormularzaService.ustawLiczbeZmian(this.liczbaZmian);
    return this.liczbaZmian;
  }
}
