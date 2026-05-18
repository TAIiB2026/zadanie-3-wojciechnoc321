import { Kierowca } from '../models/kierowca.model';

export interface KierowcaServiceInterface {
  pobierzListe(): Kierowca[];
  usun(id: number): void;
  dodaj(kierowca: Kierowca): void;
}
