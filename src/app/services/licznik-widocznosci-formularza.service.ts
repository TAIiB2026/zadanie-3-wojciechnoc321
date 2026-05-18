import { Injectable } from '@angular/core';

@Injectable()
export class LicznikWidocznosciFormularzaService {
  private liczbaZmian = 0;

  pobierzLiczbeZmian(): number {
    return this.liczbaZmian;
  }

  zliczZmiane(): number {
    this.liczbaZmian++;
    return this.liczbaZmian;
  }
}
